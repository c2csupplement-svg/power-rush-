import "./globals.css";
import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
export const metadata:Metadata={title:"POWER RUSH",description:"Ultra premium performance formula"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}</body></html>}