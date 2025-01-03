import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { GlobalStyle } from './styles/globalStyles.ts';
import BookmarkList from './components/BookmarkList.tsx';
import ThemeSwitch from './components/ThemeSwitch.tsx';
import Notification from './components/Notification.tsx';

interface Bookmark {
  id: number;
  title: string;
  url: string;
}

const App: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [notification, setNotification] = useState({ message: '', isVisible: false });

  const showNotification = (message: string) => {
    setNotification({ message, isVisible: true });
    setTimeout(() => {
      setNotification({ message: '', isVisible: false });
    }, 3 * 1000);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddBookmark = useCallback(() => {
    if (!title.trim() || !url.trim()) {
      showNotification('Please fill in both title and URL');
      return;
    }

    if (!isValidUrl(url)) {
      showNotification('Please enter a valid URL');
      return;
    }

    const exists = bookmarks.some(
      bookmark => 
        bookmark.title.toLowerCase() === title.toLowerCase() ||
        bookmark.url.toLowerCase() === url.toLowerCase()
    );

    if (exists) {
      showNotification('A bookmark with this title or URL already exists');
      return;
    }

    const newBookmark = {
      id: Date.now(),
      title: title.trim(),
      url: url.trim(),
    };

    setBookmarks(prev => [...prev, newBookmark]);
    setTitle('');
    setUrl('');
  }, [title, url, bookmarks]);

  const deleteBookmark = (id: number) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
  };

  const editBookmark = (id: number, updatedBookmark: { title: string; url: string }) => {
    setBookmarks((prev) =>
      prev.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, ...updatedBookmark } : bookmark
      )
    );
  };

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className="app-container">
        <ThemeSwitch />
      <Notification 
        message={notification.message}
        isVisible={notification.isVisible}
      />
      <h1>Bookmark Manager</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleAddBookmark}>Add Bookmark</button>
      </div>
      <BookmarkList
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        editBookmark={editBookmark}
      />
    </div>
    </ThemeProvider>
  );
    
};

export default App;
