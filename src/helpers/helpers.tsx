const cleanHtmlContent = (content: string): string => {
    return content.replace(/<\/?[^>]+(>|$)/g, '');
};

const findPostContentByTitle = (posts: any, title: string): string => cleanHtmlContent(posts?.data?.posts?.nodes?.find((el: { title: string }) => el.title === title)?.content || '');

export { findPostContentByTitle };