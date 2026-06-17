"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { usePaystackPayment } from "react-paystack";

export interface Service {
  name: string;
  price: number;
}

interface ServiceCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceCheckoutModal({ isOpen, onClose, service }: ServiceCheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
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
    amount: (service?.price || 0) * 100, // Paystack requires amount in pesewas
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
          display_name: "Service Booked",
          variable_name: "service_name",
          value: service?.name || "",
        }
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

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
      {isOpen && service && (
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
            className="bg-background border border-[#0077b5]/20 p-8 md:p-12 max-w-md w-full relative rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
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
                <div className="w-20 h-20 bg-[#0077b5]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#0077b5]" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-[#0077b5]">Booking Confirmed!</h3>
                <p className="text-foreground/90 font-light mb-8 leading-relaxed">
                  I&apos;ve received your payment. I&apos;ll reach you very soon.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-4 bg-[#0077b5] text-background hover:bg-[#005582] transition-colors text-sm font-semibold uppercase tracking-widest rounded-lg"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-serif text-2xl md:text-3xl mb-2 text-[#0077b5]">Secure Booking</h3>
                <p className="text-foreground/80 font-light text-sm mb-6">
                  You are booking <strong className="text-foreground font-serif italic">{service.name}</strong> for <strong>¢{service.price}</strong>.
                </p>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#0077b5] transition-colors rounded-lg"
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
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#0077b5] transition-colors rounded-lg"
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
                      className="w-full bg-transparent border border-foreground/10 p-3 text-foreground text-sm focus:outline-none focus:border-[#0077b5] transition-colors rounded-lg"
                      placeholder="+233 55 000 0000"
                    />
                  </div>

                  <div className="pt-4 mt-4 border-t border-foreground/5">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0077b5] text-background hover:bg-[#005582] transition-colors text-sm font-semibold uppercase tracking-widest rounded-lg"
                    >
                      Pay ¢{service.price}
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
