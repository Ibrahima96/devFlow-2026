// Importation du composant Link de Next.js pour la navigation sans rechargement de page
import Link from "next/link";

// Importation du composant Image de Next.js pour optimiser les images
import Image from "next/image";

// Importation du composant Theme pour gérer le changement de thème (clair/sombre)
import Theme from "@/components/navigation/navbar/Theme";

// Importation du composant MobileNavigation pour la navigation mobile
import MobileNavigation from './MobileNavigation';

// Définition du composant fonctionnel Navbar
const Navbar = () => {
    return (
        // Barre de navigation: flex pour l'alignement, background adapté au thème, positionnée en haut (fixed)
        <nav className='flex-between background-light900_dark200 fixed w-full p-6 dark:shadow-none sm:px-12 z-50'>
            
            {/* Lien vers la page d'accueil avec logo et texte */}
            <Link href="/" className="flex items-center gap-1">
                {/* Logo du site - Image optimisée par Next.js */}
                <Image
                    src={'/images/site-logo.svg'}
                    width={23}
                    height={23}
                    alt={'devFlow logo'}
                />
                
                {/* Texte "DevFlow" - caché sur mobile (max-sm:hidden) */}
                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev
                    <span className="text-primary-500">Flow</span>
                </p>
            </Link>
            
            {/* Espace réservé pour la barre de recherche globale */}
            <p>GlobalSearch</p>
            
            {/* Container pour les éléments droits: thème et navigation mobile */}
            <div className="flex-between gap-5">
                {/* Composant pour changer le thème (clair/sombre) */}
                <Theme />
                
                {/* Navigation mobile (menu burger, etc.) */}
                <MobileNavigation/>
            </div>
        </nav>
    )
}

// Export du composant pour l'utiliser ailleurs
export default Navbar

