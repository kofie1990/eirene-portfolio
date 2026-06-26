"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, CheckCircle2 } from "lucide-react";
import { usePaystackPayment } from "react-paystack";

export interface Product {
  name: string;
  price: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [gpsLocation, setGpsLocation] = useState("");
  const [isGettingGps, setIsGettingGps] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success">("idle");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setPaymentStatus("idle");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: (product?.price || 0) * 100, // Paystack requires amount in pesewas
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_placeholder",
    currency: "GHS",
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: formData.name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: formData.phone,
        },
        {
          display_name: "Delivery Address",
          variable_name: "delivery_address",
          value: formData.address || "Not provided",
        },
        {
          display_name: "GPS Location (Google Maps)",
          variable_name: "gps_location",
          value: gpsLocation || "Not provided",
        },
        {
          display_name: "Product",
          variable_name: "product_name",
          value: product?.name || "",
        }
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const handleGetLocation = () => {
    setIsGettingGps(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setGpsLocation(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
          setIsGettingGps(false);
        },
        (error) => {
          console.error(error);
          alert("Could not get your location. Please check your browser permissions.");
          setIsGettingGps(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
      setIsGettingGps(false);
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    
    if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
       alert("Paystack public key is missing! Please set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in your .env.local file.");
    }

    initializePayment({
      onSuccess: () => {
        setPaymentStatus("success");
      },
      onClose: () => {
        console.log("Payment dialog closed.");
      },
    });
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-background border border-[#c2a878]/20 p-8 md:p-12 max-w-md w-full relative rounded-sm shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            
            {paymentStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-[#c2a878]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#c2a878]" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-[#c2a878]">Order Confirmed!</h3>
                <p className="text-foreground/90 font-light mb-8 leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. Your payment for <strong className="text-foreground italic">{product.name}</strong> was successful. We&apos;ve received your delivery details and will process your order shortly.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-4 bg-[#c2a878] text-background hover:bg-[#a68f63] transition-colors text-sm font-semibold uppercase tracking-widest rounded-sm"
                >
                  Continue Shopping
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-serif text-2xl md:text-3xl mb-2 text-[#c2a878]">Secure Checkout</h3>
                <p className="text-foreground/80 font-light text-sm mb-6">
                  You are purchasing <strong className="text-foreground font-serif italic">{product.name}</strong> for <strong>¢{product.price}</strong>.
                </p>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#c2a878] transition-colors rounded-sm"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#c2a878] transition-colors rounded-sm"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#c2a878] transition-colors rounded-sm"
                      placeholder="+233 55 000 0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-1">Delivery Address (Optional)</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#c2a878] transition-colors rounded-sm resize-none h-20"
                      placeholder="Street name, Area, City"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={isGettingGps || !!gpsLocation}
                      className="w-full flex items-center justify-center space-x-2 py-3 border border-[#c2a878]/30 text-[#c2a878] hover:bg-[#c2a878]/10 transition-colors text-xs uppercase tracking-widest rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MapPin size={14} />
                      <span>
                        {gpsLocation
                          ? "GPS Location Added ✓"
                          : isGettingGps
                          ? "Getting Location..."
                          : "Attach GPS Location (Optional)"}
                      </span>
                    </button>
                    {gpsLocation && <p className="text-[10px] text-[#c2a878]/70 mt-2 text-center">Your precise location will be sent for easier delivery.</p>}
                  </div>

                  <div className="pt-4 mt-4 border-t border-foreground/5">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#c2a878] text-background hover:bg-[#a68f63] transition-colors text-sm font-semibold uppercase tracking-widest rounded-sm"
                    >
                      Pay ¢{product.price}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
