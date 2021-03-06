export default function titleInitials(title) {
  try {
    return title
      .split(' ', 2)
      .map(word => word[0])
      .map(chat => chat.toUpperCase())
      .join('');
  } catch (e) {
    return '🦄';
  }
}
