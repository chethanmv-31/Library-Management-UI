'use client'

import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Image from 'next/image';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EditNoteIcon from '@mui/icons-material/EditNote';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const AccountPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profileImage, setProfileImage] = useState('/default-avatar.png');
  const [userInfo, setUserInfo] = useState({
    fullName: 'Reinhard Kenson',
    email: 'Kensoncs.official@college.com',
    registerNumber: '6022020',
    phoneNumber: '+91 9952508995',
    bio: "I'm a Student"
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Log all field values to console
    console.log({
      fullName: userInfo.fullName,
      email: userInfo.email,
      registerNumber: userInfo.registerNumber,
      phoneNumber: userInfo.phoneNumber,
      bio: userInfo.bio,
      profileImage: profileImage
    });
    setIsEditing(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="max-w-5xl p-8 bg-white rounded-lg">
      <Box >
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#F4683C',
              height: '2px'
            }
          }}
          sx={{
            '& .MuiTab-root': {
              fontWeight: 400,
              color: '#64748b',
              marginRight: '32px',
              minWidth: 'auto',
              padding: '12px 8px',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: '#E2E8F0'
              },
              '&.Mui-selected': {
                color: '#F4683C',
                fontWeight: 700,
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#F4683C',
            }
          }}
        >
          <Tab label="Account Setting" />
          <Tab label="Login & Security" />
          <Tab label="Notifications" />
          <Tab label="Interface" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <div className="p-8">
          <div className="mb-6">
            <div className="flex gap-8 items-start">
              <div className="relative">
                <div className="w-[120px] h-[120px] relative">
                  <Image 
                    src={profileImage}
                    alt="Profile" 
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-full h-full"
                    style={{ maxWidth: '120px', maxHeight: '120px' }}
                  />
                </div>
                <label htmlFor="profile-upload" className="text-[12px] text-gray-500 text-center mt-2 cursor-pointer block hover:text-[#F4683C] underline">
                  Upload New photo
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="flex gap-4">
                
                <div className="rounded-lg bg-[#F4683C] text-white  w-[175px] h-[155px] flex flex-col items-center justify-center">
                <div className="flex items-center gap-4 justify-between mb-2">

                  <div className="bg-white rounded-lg p-2 mb-3">
                    <ImportContactsIcon sx={{ color: '#F4683C', fontSize: 28 }} />
                  </div>
                  <div className="text-3xl font-bold mb-1">120</div>
                </div>
                  <div className="text-lg text-left">Readings</div>
                </div>
                <div className="rounded-lg bg-[#9747FF] text-white  w-[175px] h-[155px] flex flex-col items-center justify-center">
                  <div className="flex items-center gap-4 justify-between mb-2">

                  <div className="bg-white rounded-lg p-2 mb-3">
                    <VolunteerActivismIcon sx={{ color: '#9747FF', fontSize: 28 }} />
                  </div>
                  <div className="text-3xl font-bold mb-1">10</div>
                  </div>
                  <div className="text-lg text-left">Contribution</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end cursor-pointer" onClick={handleEditClick}>
            <EditNoteIcon sx={{ color: isEditing ? '#F4683C' : '#64748b' }}/>
          </div>

          <form onSubmit={handleUpdateProfile} className="max-w-4xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-3">
                <label className="block text-gray-600 mb-2">Full name</label>
                <input 
                  type="text" 
                  value={userInfo.fullName}
                  onChange={(e) => setUserInfo({...userInfo, fullName: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-3 border bg-[#E0E4EC] border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#F4683C] ${!isEditing && ' opacity-70'}`}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-2">College Email ID</label>
                <input 
                  type="email" 
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-3 border bg-[#E0E4EC] border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#F4683C] ${!isEditing && ' opacity-70'}`}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-2">Register Number</label>
                <input 
                  type="text" 
                  value={userInfo.registerNumber}
                  onChange={(e) => setUserInfo({...userInfo, registerNumber: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-3 border bg-[#E0E4EC] border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#F4683C] ${!isEditing && ' opacity-70'}`}
                />
              </div>

              <div className="mb-3">
                <label className="block text-gray-600 mb-2">Phone number</label>
                <input 
                  type="text" 
                  value={userInfo.phoneNumber}
                  onChange={(e) => setUserInfo({...userInfo, phoneNumber: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-3 border bg-[#E0E4EC] border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#F4683C] ${!isEditing && ' opacity-70'}`}
                />
              </div>

              <div className="col-span-2 mb-6">
                <label className="block text-gray-600 mb-2">Bio</label>
                <textarea 
                  value={userInfo.bio}
                  onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-3 border bg-[#E0E4EC] border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#F4683C] min-h-[100px] ${!isEditing && ' opacity-70'}`}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                disabled={!isEditing}
                className={`px-8 py-3 bg-[#F4683C] text-white rounded-md font-medium hover:bg-[#E55B33] transition-colors ${!isEditing && 'opacity-50 '}`}
              >
                Update Profile
              </button>
              <button
                type="button"
                disabled={!isEditing}
                className={`px-8 py-3 border border-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-50 transition-colors ${!isEditing && 'opacity-50 '}`}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {/* Login & Security content */}
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        {/* Notifications content */}
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        {/* Interface content */}
      </TabPanel>
    </div>
  );
};

export default AccountPage;