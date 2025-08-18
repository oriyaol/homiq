import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'


test('renders app name and nav links', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
    expect(screen.getByText(/Homiq/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Devices/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Settings/i })).toBeInTheDocument()
})
