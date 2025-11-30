import Link from "next/link";
import { Logo } from "@/components/icons";
import { footerContacts } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="EasyMove Home">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">EasyMove</span>
            </Link>
            <p className="text-sm">Sua mudança, fácil e no prazo.</p>
            <p className="text-sm font-semibold">Atendemos todo o Brasil.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#servicos" className="hover:text-primary">Serviços</Link></li>
                <li><Link href="/#como-funciona" className="hover:text-primary">Como funciona</Link></li>
                <li><Link href="/#faq" className="hover:text-primary">FAQ</Link></li>
                <li><Link href="/orcamento" className="hover:text-primary">Orçamento</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                {footerContacts.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <contact.icon className="h-4 w-4" />
                        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            {contact.text}
                        </a>
                    </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-servico" className="hover:text-primary">Termos de Serviço</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} EasyMove. Todos os direitos reservados.</p>
          <p>CNPJ: 63.818.211/0001-56</p>
        </div>
      </div>
    </footer>
  );
}
