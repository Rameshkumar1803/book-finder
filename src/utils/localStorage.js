const KEY = 'bf_favs_v1';
export function loadFavorites(){ try { return JSON.parse(localStorage.getItem(KEY))||[] } catch { return [] } }
export function saveFavorites(list){ try{ localStorage.setItem(KEY, JSON.stringify(list)) }catch{} }
