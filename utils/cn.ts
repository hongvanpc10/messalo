export default function cn(...classes: any[]) {
    return classes.filter(Boolean).map(c => typeof c === 'string' ? c.trim() : c).join(' ')
}