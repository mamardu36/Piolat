import { Container } from "./Container";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

export function PageHeader({ crumbs, title, lead, children }: { crumbs: Crumb[]; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <header className="border-b border-line bg-mist">
      <Container className="pb-12 pt-8 sm:pb-16">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-8 max-w-4xl text-h1 font-bold">{title}</h1>
        {lead && <p className="mt-5 max-w-prose text-lead text-steel">{lead}</p>}
        {children}
      </Container>
    </header>
  );
}
