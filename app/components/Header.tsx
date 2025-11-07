'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { company } from '@/data/siteContent';

const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#fournisseurs', label: 'Fournisseurs' },
  { href: '#promotions', label: 'Promotions' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' }
];

type HeaderProps = {
  overlay?: boolean;
};

export function Header({ overlay = false }: HeaderProps) {
  const mobileMenuId = 'header-mobile-nav';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Détecter la section active
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
      return () => document.body.classList.remove('overflow-hidden');
    }
    document.body.classList.remove('overflow-hidden');
    return undefined;
  }, [menuOpen]);

  const headerClasses = classNames(
    'z-50 border-b transition-colors duration-300',
    overlay ? 'fixed top-0 left-0 w-full' : 'sticky top-0',
    scrolled ? 'bg-white/90 backdrop-blur border-slate-100 shadow-sm' : 'border-transparent bg-transparent'
  );

  const getNavLinkClasses = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return classNames(
      'text-sm font-semibold transition relative',
      scrolled
        ? isActive
          ? 'text-primary'
          : 'text-slate-700 hover:text-primary'
        : isActive
          ? 'text-accent'
          : 'text-white hover:text-accent',
      isActive && 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:rounded-full',
      isActive && (scrolled ? 'after:bg-primary' : 'after:bg-accent')
    );
  };

  const phoneButtonClasses = classNames(
    'rounded-full px-4 py-2 text-sm font-semibold transition',
    scrolled
      ? 'border border-primary text-primary hover:bg-primary hover:text-white'
      : 'border border-white text-white hover:bg-white/10'
  );

  const mobileContainerClasses = classNames(
    'md:hidden overflow-hidden transition-all duration-300',
    scrolled || !overlay ? 'border-t border-slate-200 bg-white' : 'border-t border-white/20 bg-slate-900/95 text-white',
    menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
  );

  const mobileLinkClasses = classNames(
    'rounded-xl px-3 py-2 text-sm font-semibold transition',
    scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
  );

  const mobilePhoneClasses = classNames(
    'rounded-xl border px-3 py-2 text-center text-sm font-semibold transition',
    scrolled
      ? 'border-primary text-primary hover:bg-primary hover:text-white'
      : 'border-white/40 text-white hover:bg-white/10'
  );

  const burgerBarClasses = classNames(
    'block h-0.5 w-6 transition',
    scrolled ? 'bg-slate-900' : 'bg-white'
  );

  const burgerButtonClasses = classNames(
    'md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
    scrolled ? 'border-slate-200 bg-white' : 'border-white/40 bg-transparent'
  );

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="#accueil" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="relative h-14 w-40 overflow-hidden rounded-full bg-white px-4 py-2 shadow-lg transition-all hover:scale-105 md:w-44">
            <Image
              src="/images/asProServ_logo.png"
              alt="AS PRO SERVICES"
              fill
              className="object-contain p-1"
              priority
              sizes="(min-width: 768px) 176px, 160px"
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={getNavLinkClasses(item.href)} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`tel:${company.contact.phone}`} className={phoneButtonClasses}>
            {company.contact.displayPhone}
          </a>
        </nav>
        <button
          type="button"
          className={burgerButtonClasses}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={burgerBarClasses} />
            <span className={burgerBarClasses} />
            <span className={burgerBarClasses} />
          </div>
        </button>
      </div>
      <div className={mobileContainerClasses} id={mobileMenuId} aria-hidden={!menuOpen}>
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={mobileLinkClasses} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${company.contact.phone}`}
            className={mobilePhoneClasses}
            onClick={() => setMenuOpen(false)}
          >
            Appeler {company.contact.displayPhone}
          </a>
        </nav>
      </div>
    </header>
  );
}
