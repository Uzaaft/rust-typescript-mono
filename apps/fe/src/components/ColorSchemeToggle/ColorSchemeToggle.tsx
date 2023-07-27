'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button variant="filled" onClick={() => setColorScheme('light')}>Light</Button>
      <Button variant="default" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button variant="default" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
