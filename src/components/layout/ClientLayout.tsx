"use client";

import LoginAlertModal from "@/components/modals/LoginAlertModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setShowLoginAlert } from "@/store/slices/authSlice";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";

function LoginAlertWrapper() {
  const showLoginAlert = useSelector(
    (state: RootState) => state.auth.showLoginAlert
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClose = () => {
    dispatch(setShowLoginAlert(false));
    router.push("/login");
  };

  return <LoginAlertModal isOpen={showLoginAlert} onClose={handleClose} />;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <>
      <div className="flex h-full">
        {!isAuthPage && <Sidebar />}
        <main
          style={{
            flexGrow: 1,
            background: isAuthPage ? "none" : "#F3F3F7",
            ...(isAuthPage
              ? {}
              : {
                  padding: "3rem",
                  paddingTop: "2rem",
                  height: "fit-content",
                  // position:"fixed"
                }),
          }}
        >
          {!isAuthPage && <Navbar />}
          {children}
        </main>
      </div>
      <LoginAlertWrapper />
    </>
  );
} 