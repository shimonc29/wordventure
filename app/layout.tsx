import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'WordVenture | הרפתקה באנגלית',description:'משחק אינטראקטיבי ללימוד אנגלית לכיתה ו׳'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body>{children}</body></html>}
