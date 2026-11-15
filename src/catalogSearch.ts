import { catalog } from './catalog';
export function findAuctions(query: string, category = 'all', sort = 'ending') {
 const normalized=query.trim().toLowerCase();
 const results=catalog.filter(item=>(category==='all'||item.category===category)&&`${item.title} ${item.category} ${item.kicker}`.toLowerCase().includes(normalized));
 if(sort==='low') results.sort((a,b)=>a.currentPrice-b.currentPrice);
 if(sort==='bids') results.sort((a,b)=>b.bidCount-a.bidCount);
 return results;
}
