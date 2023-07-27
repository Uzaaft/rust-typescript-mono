'use client';

import React, { forwardRef } from 'react';

import { Avatar, UnstyledButton, Menu, Text, rem } from '@mantine/core';
import { IconSearch, IconSettings } from '@tabler/icons-react';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  // image: string;
  name: string;
  // email: string;
  // icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ name, ...others }: UserButtonProps, ref) => (
    <UnstyledButton ref={ref} {...others}>
      <Avatar>{name}</Avatar>
    </UnstyledButton>
  )
);

export default function UserNav() {
  return (
    <div>
      <Menu
        shadow="md"
        offset={4}
        width={200}
        withArrow
        trigger="hover"
        openDelay={100}
        closeDelay={400}
      >
        <Menu.Target>
          <UserButton name="User" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>
            <Text size="xs">Account</Text>
          </Menu.Label>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Divider />
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
            Settings
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
