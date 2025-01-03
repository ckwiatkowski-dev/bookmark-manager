import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
    padding: 20px;
  }

  body.dark {
    background-color: #121212;
    color: #fff;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  input, button {
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  input[type="url"], input[type="text"] {
    width: 100%;
    max-width: 400px;
    margin-right: 10px;
    font-size: 15px;
  }

  button {
    margin-right: 10px;
    cursor: pointer;
    background-color: #6200ea;
    color: white;
    border: none;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #3700b3;
    transform: translateY(-2px);
  }

  .app-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .form-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6200ea;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 5px;
  }

  .bookmark-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: 1200px;
    gap: 20px;
    width: 100%;
    margin: 20px auto;
    justify-items: center;
  }

  .no-bookmarks {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin: 40px 0;
  }

  body.dark .no-bookmarks {
    color: #aaa;
  }

  @media (min-width: 1200px) {
    .bookmark-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .bookmark-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 60px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .bookmark-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .bookmark-item a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .bookmark-item button {
    background: transparent;
    border: none;
    padding: 8px;
    margin: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .bookmark-item .edit-btn {
    color: #f5a623;
    border: 2px solid #f5a623;
  }

  .bookmark-item .edit-btn:hover {
    background: #f5a62320;
    transform: scale(1.1);
  }

  .bookmark-item .delete-btn {
    color: #ff4d4f;
    border: 2px solid #ff4d4f;
  }

  .bookmark-item .delete-btn:hover {
    background: #ff4d4f20;
    transform: scale(1.1);
  }

  .edit-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .edit-form-container {
    position: relative;
    background-color: #fff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 400px;
    z-index: 1001;
  }

  .edit-form-container h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }

  .edit-form-container input {
    width: 100%;
    margin-bottom: 15px;
  }

  body.dark .edit-form-container {
    background-color: #2d2d2d;
    color: #fff;
  }

  body.dark .edit-form-container input {
    background-color: #1a1a1a;
    color: #fff;
    border-color: #444;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  .close-button:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }

  body.dark .close-button {
    color: #fff;
  }

  body.dark .close-button:hover {
    background-color: #404040;
  }

  .edit-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 25px;
  }

  .edit-buttons button {
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    min-width: 120px;
  }

  .edit-buttons button:first-child {
    background-color: #4CAF50;
  }

  .edit-buttons button:first-child:hover {
    background-color: #388E3C;
  }

  .edit-buttons .cancel-button {
    background-color: #9e9e9e;
  }

  .edit-buttons .cancel-button:hover {
    background-color: #757575;
  }

  @media (max-width: 600px) {
    input[type="url"], input[type="text"], button {
      width: 100%;
    }
  }

  body.dark .bookmark-item {
    background-color: #2d2d2d;
    color: #fff;
  }

  body.dark .bookmark-item a {
    color: #fff;
  }

  .app-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    gap: 15px;
  }

  .form-container button {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background-color: #6200ea;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  .no-bookmarks {
    width: 100%;
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    margin: 40px 0;
  }

  body.dark .no-bookmarks {
    color: #aaa;
  }
`;
