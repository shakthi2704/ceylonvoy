import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline-white'
    | 'outline-gold'
    | 'ghost'
    | 'gold';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonVariantsProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export function buttonVariants({
    variant = 'primary',
    size = 'md',
    className,
}: ButtonVariantsProps = {}) {
    return cn(
        // Base
        'inline-flex items-center justify-center font-semibold transition-all duration-400',
        'cursor-pointer whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-primary focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',

        // Variants
        variant === 'primary' &&
        'bg-emerald-primary text-white hover:bg-emerald-dark active:scale-[0.98]',
        variant === 'secondary' &&
        'border border-emerald-primary text-emerald-primary hover:bg-emerald-primary hover:text-white',
        // variant === 'outline-white' &&
        // 'border border-white text-white hover:bg-white hover:text-emerald-primary',
        variant === 'outline-white' &&
        `border border-white/50 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-heading hover:border-white hover:-translate-y-1 hover:shadow-xl`,
        // variant === 'outline-gold' &&
        // 'border border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white active:scale-[0.98]',
        variant === 'ghost' &&
        'text-heading hover:text-emerald-primary hover:bg-emerald-primary/5',
        // variant === 'gold' &&
        // 'bg-gold-accent text-white hover:bg-emerald-dark active:scale-[0.98]',
        variant === 'gold' &&
        `bg-gold-accent text-black shadow-lg shadow-gold-accent/20 hover:bg-[#d8b54a]  hover:shadow-gold-accent/40 hover:-translate-y-1 active:translate-y-0`,
        variant === 'outline-gold' &&
        `border border-gold-accent/80 text-gold-accent bg-transparent hover:text-gold-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-accent/30 active:translate-y-0`,

        // Sizes
        size === 'sm' && 'text-sm px-4 py-2 rounded-md gap-1.5',
        size === 'md' && 'text-sm px-5 py-2.5 rounded-md gap-2',
        size === 'lg' && 'text-base px-8 py-4 rounded-md gap-2',

        className
    );
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant, size, className })}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };