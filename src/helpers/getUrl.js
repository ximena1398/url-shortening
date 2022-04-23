export const getGifs = async ( urlInput ) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${ encodeURI( urlInput ) }`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const generatedUrl = data.map(link => {
        return {
            origial: link.original_link,
            generated: link.short_link
        }
    })

    return generatedUrl;
}