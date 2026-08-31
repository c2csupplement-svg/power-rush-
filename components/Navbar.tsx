"use client";
import Link from "next/link";
export default function Navbar(){
 return <nav className="site-nav">
  <Link href="/" className="nav-link">Home</Link>
  <Link href="/products" className="nav-link nav-product">All Products</Link>
  <Link href="/" className="nav-logo">RUSH POWER</Link>
  <Link href="/newsletter" className="nav-link">News letter</Link>
  <Link href="/blog" className="nav-link">Blog</Link>
 </nav>
}