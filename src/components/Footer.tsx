export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              © {currentYear} Ethereum Foundation. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
