const cleanHtmlContent = (content: string): string => {
    return content.replace(/<\/?[^>]+(>|$)/g, '');
};

const findContentByTitle = (data: any, title: string): string => cleanHtmlContent(data?.posts?.nodes?.find((el: { title: string }) => el.title === title)?.content || '');

export { findContentByTitle };