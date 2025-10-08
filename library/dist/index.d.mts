import * as react_jsx_runtime from 'react/jsx-runtime';

interface ErrorProps {
    error: string;
}
declare const ErrorGeneration: ({ error }: ErrorProps) => react_jsx_runtime.JSX.Element;

interface VideoSettings$1 {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}
interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    settings: VideoSettings$1;
    onSettingsChange: (settings: VideoSettings$1) => void;
}
declare const FormGeneration: ({ onSubmit, settings, onSettingsChange, }: FormProps) => react_jsx_runtime.JSX.Element;

declare const HeaderGeneration: () => react_jsx_runtime.JSX.Element;

interface PreviewProps {
    isLoading: boolean;
    imageUrl: string;
}
declare const Preview: ({ isLoading, imageUrl }: PreviewProps) => react_jsx_runtime.JSX.Element;

interface VideoSettings {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}
interface SettingsProps {
    settings: VideoSettings;
    onSettingsChange: (settings: VideoSettings) => void;
}
declare const SettingsGeneration: ({ settings, onSettingsChange, }: SettingsProps) => react_jsx_runtime.JSX.Element;

declare function MultimodalInput(): react_jsx_runtime.JSX.Element;

declare function AuthForm(): react_jsx_runtime.JSX.Element;

declare function SocialLogin(): react_jsx_runtime.JSX.Element;

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}
interface CartItem extends Product {
    quantity: number;
}

interface CartDrawerProps {
    cart: CartItem[];
    onClose: () => void;
    onRemoveFromCart: (productId: string) => void;
}
declare function CartDrawer({ cart, onClose, onRemoveFromCart, }: CartDrawerProps): react_jsx_runtime.JSX.Element;

interface HeaderProps {
    cartCount: number;
    onCartOpen: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}
declare function Header({ cartCount, onCartOpen, searchQuery, onSearchChange, }: HeaderProps): react_jsx_runtime.JSX.Element;

interface ProductGridProps {
    products: Product[];
    onProductSelect: (product: Product) => void;
}
declare function ProductGrid({ products, onProductSelect }: ProductGridProps): react_jsx_runtime.JSX.Element;

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}
declare function ProductModal({ product, onClose, onAddToCart, }: ProductModalProps): react_jsx_runtime.JSX.Element;

interface TopBarProps {
    cartItemCount: number;
    onCartClick: () => void;
    onSearch: (query: string) => void;
}
declare function TopBar({ cartItemCount, onCartClick, onSearch }: TopBarProps): react_jsx_runtime.JSX.Element;

interface Btn14Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}
declare function Btn14({ label, className, ...props }: Btn14Props): react_jsx_runtime.JSX.Element;

interface Metric {
    label: string;
    value: string;
    trend: number;
    unit?: "cal" | "min" | "hrs";
}
interface Goal {
    id: string;
    title: string;
    isCompleted: boolean;
}

interface BackgroundCirclesProps {
    title?: string;
    description?: string;
    className?: string;
    variant?: keyof typeof COLOR_VARIANTS;
}
declare const COLOR_VARIANTS: {
    readonly primary: {
        readonly border: readonly ["border-emerald-500/60", "border-cyan-400/50", "border-slate-600/30"];
        readonly gradient: "from-emerald-500/30";
    };
    readonly secondary: {
        readonly border: readonly ["border-violet-500/60", "border-fuchsia-400/50", "border-slate-600/30"];
        readonly gradient: "from-violet-500/30";
    };
    readonly tertiary: {
        readonly border: readonly ["border-orange-500/60", "border-yellow-400/50", "border-slate-600/30"];
        readonly gradient: "from-orange-500/30";
    };
    readonly quaternary: {
        readonly border: readonly ["border-purple-500/60", "border-pink-400/50", "border-slate-600/30"];
        readonly gradient: "from-purple-500/30";
    };
    readonly quinary: {
        readonly border: readonly ["border-red-500/60", "border-rose-400/50", "border-slate-600/30"];
        readonly gradient: "from-red-500/30";
    };
    readonly senary: {
        readonly border: readonly ["border-blue-500/60", "border-sky-400/50", "border-slate-600/30"];
        readonly gradient: "from-blue-500/30";
    };
    readonly septenary: {
        readonly border: readonly ["border-gray-500/60", "border-gray-400/50", "border-slate-600/30"];
        readonly gradient: "from-gray-500/30";
    };
    readonly octonary: {
        readonly border: readonly ["border-red-500/60", "border-rose-400/50", "border-slate-600/30"];
        readonly gradient: "from-red-500/30";
    };
};
declare function BackgroundCircles({ title, description, className, variant, }: BackgroundCirclesProps): react_jsx_runtime.JSX.Element;

interface CheckmarkProps {
    size?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
}
declare function Checkmark({ size, strokeWidth, color, className }: CheckmarkProps): react_jsx_runtime.JSX.Element;

interface ToolbarProps {
    className?: string;
    activeColor?: string;
    onSearch?: (value: string) => void;
}
declare function Toolbar({ className, activeColor, onSearch, }: ToolbarProps): react_jsx_runtime.JSX.Element;

declare function VercelV0Chat(): react_jsx_runtime.JSX.Element;

export { AuthForm, BackgroundCircles, Btn14, CartDrawer, Checkmark, ErrorGeneration, FormGeneration, type Goal, Header, HeaderGeneration, type Metric, MultimodalInput, Preview, ProductGrid, ProductModal, SettingsGeneration, SocialLogin, Toolbar, TopBar, VercelV0Chat };
