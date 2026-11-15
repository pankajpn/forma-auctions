export const themes = [
 {id:'classic',label:'Classic',description:'A familiar marketplace',color:'#2563eb'},
 {id:'midnight',label:'Midnight',description:'A darker point of view',color:'#a78bfa'},
 {id:'terminal',label:'Terminal',description:'Built for hardware people',color:'#35c98a'},
] as const;
export type Theme = typeof themes[number]['id'];
export function isTheme(value: string | null): value is Theme {return themes.some(theme=>theme.id===value);}
export function loadTheme(): Theme {try{const value=localStorage.getItem('auction-house-theme');return isTheme(value)?value:'classic';}catch{return 'classic';}}
