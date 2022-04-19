const linkResolver = (doc) => {
    if (doc.type === 'page') return `/${doc.lang}/${doc.uid}`
    if (doc.type === 'homepage') return `/${doc.lang}`
    return '/'
}