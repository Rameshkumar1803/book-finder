const BASE = 'https://openlibrary.org';

export async function searchBooks({ query, type='title', page=1, timeout=8000 }){
  if(!query) return { docs: [], numFound: 0 };
  const controller = new AbortController();
  const id = setTimeout(()=>controller.abort(), timeout);
  const res = await fetch(`${BASE}/search.json?${type}=${encodeURIComponent(query)}&page=${page}`, { signal: controller.signal });
  clearTimeout(id);
  if(!res.ok) throw new Error('API error');
  return res.json();
}

export async function getBookDetails(workId){
  const res = await fetch(`${BASE}/works/${workId}.json`);
  if(!res.ok) throw new Error('Details fetch failed');
  return res.json();
}

export function coverURL(id, size='M'){
  return id ? `https://covers.openlibrary.org/b/id/${id}-${size}.jpg` : 'https://via.placeholder.com/150x220?text=No+Cover';
}
