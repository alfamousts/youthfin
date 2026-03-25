import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="text-4xl font-bold text-muted-foreground/30 mb-3">
            404
          </div>
          <h1 className="text-lg font-semibold mb-2">Halaman tidak ditemukan</h1>
          <p className="text-sm text-muted-foreground mb-5">
            Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
          </p>
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
