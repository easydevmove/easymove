import Link from "next/link";
import { Logo } from "@/components/icons";
import { footerContacts } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 justify-center sm:justify-start" aria-label="EasyMove Home">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">EasyMove</span>
            </Link>
            <p className="text-sm">Sua mudança, fácil e no prazo.</p>
            <p className="text-sm font-semibold">Atendemos todo o Brasil.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-8 text-center sm:text-left">
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/#servicos" className="hover:text-primary inline-block py-1">Serviços</Link></li>
                <li><Link href="/#como-funciona" className="hover:text-primary inline-block py-1">Como funciona</Link></li>
                <li><Link href="/#faq" className="hover:text-primary inline-block py-1">FAQ</Link></li>
                <li><Link href="/orcamento" className="hover:text-primary inline-block py-1">Orçamento</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-sm">
                {footerContacts.map((contact, index) => (
                  <li key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                    <contact.icon className="h-4 w-4 flex-shrink-0" />
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary py-1">
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/politica-de-privacidade" className="hover:text-primary inline-block py-1">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-servico" className="hover:text-primary inline-block py-1">Termos de Serviço</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground space-y-1">
          <p>&copy; {currentYear} EasyMove. Todos os direitos reservados.</p>
          <p>CNPJ: 63.818.211/0001-56</p>
        </div>
      </div>
    </footer>
  );
}
