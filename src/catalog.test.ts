import { describe, expect, it } from 'vitest';
import { catalog } from './catalog';
import { findAuctions } from './catalogSearch';
import { isTheme } from './themes';
describe('sample collection',()=>{
 it('provides six unique, complete detail routes',()=>{expect(catalog).toHaveLength(6);expect(new Set(catalog.map(item=>item.slug)).size).toBe(6);for(const item of catalog){expect(item.slug).toMatch(/^[a-z0-9-]+$/);expect(item.specs.length).toBeGreaterThan(0);expect(item.description).not.toBe('');}});
 it('combines case-insensitive search and category filtering',()=>{expect(findAuctions('  NVIDIA  ')).toHaveLength(2);expect(findAuctions('NVIDIA','GPUs').map(item=>item.art)).toEqual(['gpu']);expect(findAuctions('NVIDIA','Memory')).toEqual([]);});
 it('sorts results without mutating the source collection',()=>{const original=catalog.map(item=>item.slug);const low=findAuctions('','all','low');expect(low[0].currentPrice).toBe(980);expect(findAuctions('','all','bids')[0].bidCount).toBe(31);expect(catalog.map(item=>item.slug)).toEqual(original)});
 it('accepts only the three supported themes',()=>{for(const value of ['classic','midnight','terminal'])expect(isTheme(value)).toBe(true);expect(isTheme(null)).toBe(false);expect(isTheme('invalid')).toBe(false)});
});
