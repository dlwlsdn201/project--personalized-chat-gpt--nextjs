'use client';

import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { PlusCircledIcon } from '@radix-ui/react-icons';

export const Sidebar = ({}): React.ReactElement => {
  const [selected, setSelected] = useState('ICG');

  const menuItems = [
    { id: 'work', label: 'Work' },
    { id: 'ICG', label: 'ICG', active: true },
    { id: 'SP', label: 'SP' },
    { id: 'BFF', label: 'BFF' },
    { id: 'MJ', label: 'MJ' },
    { id: 'GI', label: 'GI' },
  ];

  const contacts = [
    {
      name: 'Richard Wilson',
      status: 'online',
      message: 'I will add you to our team...',
      avatar: 'https://placehold.co/40x40',
    },
    {
      name: 'Sarah Parker',
      status: 'away',
      message: 'You: Ok, see you soon!',
      avatar: 'https://placehold.co/40x40',
    },
    {
      name: 'Abubakar Campbell',
      status: 'busy',
      message: 'You: Do you think we can do it?',
      avatar: 'https://placehold.co/40x40',
    },
    // ... Add other contacts
  ];

  return (
    <div className="bg-black text-white h-full flex flex-col w-72">
      {/* Top Logo Section */}
      <div className="p-4">
        <div className="rounded-full bg-green-500 w-12 h-12 flex items-center justify-center text-2xl font-bold">
          S
        </div>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <NavigationMenu.Item key={item.id}>
              <NavigationMenu.Link
                className={`px-4 py-2 rounded-lg ${
                  item.active
                    ? 'bg-gray-600 text-yellow-400'
                    : 'hover:bg-gray-700'
                }`}
                onClick={() => setSelected(item.id)}
              >
                {item.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Contacts */}
      <div className="flex-1 overflow-y-auto mt-4">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold">{contact.name}</div>
              <div className="text-gray-400 text-sm">{contact.message}</div>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                contact.status === 'online'
                  ? 'bg-green-400'
                  : contact.status === 'away'
                    ? 'bg-yellow-400'
                    : 'bg-red-400'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Bottom Add Button */}
      <div className="p-4">
        <button className="w-full py-2 flex items-center justify-center bg-yellow-400 text-black rounded-lg hover:bg-yellow-300">
          <PlusCircledIcon className="w-6 h-6 mr-2" /> Add Contact
        </button>
      </div>
    </div>
  );
};
