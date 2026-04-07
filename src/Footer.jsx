export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 mt-10">
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Gurunanak Glass Industries
        </p>
  
        <p className="text-xs text-gray-400 mt-2">
          Created by{" "}
          <span className="font-medium text-gray-600">
            Shrey
          </span>
        </p>
  
      </footer>
    );
  }