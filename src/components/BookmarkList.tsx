import React, { useState } from 'react';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

interface Bookmark {
  id: number;
  title: string;
  url: string;
}

interface BookmarkListProps {
  bookmarks: Bookmark[];
  deleteBookmark: (id: number) => void;
  editBookmark: (id: number, updatedBookmark: { title: string; url: string }) => void;
}

const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, deleteBookmark, editBookmark }) => {
  const [editingBookmark, setEditingBookmark] = useState<Bookmark | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleEditBookmark = (bookmark: Bookmark) => {
    setEditingBookmark(bookmark);
    setNewTitle(bookmark.title);
    setNewUrl(bookmark.url);
  };

  const handleSaveEdit = () => {
    if (editingBookmark) {
      editBookmark(editingBookmark.id, { title: newTitle, url: newUrl });
      setEditingBookmark(null);
    }
  };

  const handleCancel = () => {
    setEditingBookmark(null);
  };

  return (
    <div className="relative">
      {editingBookmark && (
        <div className="edit-modal-overlay">
          <div className="edit-form-container">
            <button className="close-button" onClick={handleCancel}>
              <FaTimes />
            </button>
            <h3>Edit Bookmark</h3>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="url"
              placeholder="URL"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <div className="edit-buttons">
              <button onClick={handleSaveEdit}>Save Changes</button>
              <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="bookmark-container">
        {bookmarks.length === 0 ? (
          <p className="no-bookmarks">No bookmarks added yet</p>
        ) : (
          bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bookmark-item">
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.title}
              </a>
              <div className="action-buttons">
                <button 
                  className="edit-btn"
                  onClick={() => handleEditBookmark(bookmark)}
                >
                  <FaEdit />
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => deleteBookmark(bookmark.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookmarkList;