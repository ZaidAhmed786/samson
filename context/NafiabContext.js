import { cartArray } from '@/data/Data';
import { createContext, useState } from 'react';

const NafiabContext = createContext();

const NafiabProvider = ({children}) => {
    // Search Modal
    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleSearchClose = () => setShowSearchModal(false);
    const handleSearchShow = () => setShowSearchModal(true);

    // Video Modal
    const [showVideoModal, setShowVideoModal] = useState(false);

    const handleVideoClose = () => {
        setShowVideoModal(false);
    };

    const handleVideoShow = () => {
        setShowVideoModal(true);
    };

    // Sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleSidebarOpen = () => {
        setIsSidebarOpen(true)
    }

    const handleSidebarClose = () => {
        setIsSidebarOpen(false)
    }

    // Cart Modal
    const [showCartModal,setShowCartModal] = useState(false);

    const handleCartClose = () => {
        setShowCartModal(false);
    };

    const handleCartOpen = () => {
        setShowCartModal(true)
    }
    // cart table
    const cartItemsWithQuantity = cartArray.map(item => ({ ...item, quantity: 1 }));

    const [cartItems, setCartItems] = useState(cartItemsWithQuantity);

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity >= 1) {
            const updatedCart = cartItems.map(item => 
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            );
            setCartItems(updatedCart);
        }
    };

    return (
        <NafiabContext.Provider value={{
            showSearchModal,
            handleSearchClose,
            handleSearchShow,
            showVideoModal,
            handleVideoClose,
            handleVideoShow,
            isSidebarOpen,
            handleSidebarClose,
            handleSidebarOpen,
            showCartModal,
            handleCartClose,
            handleCartOpen,
            cartItems,
            removeItem,
            updateQuantity
        }}
        >
            {children}
        </NafiabContext.Provider>
    )
}
export {NafiabContext, NafiabProvider}