import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import ImageCarousel from '../ImageCarousel';

describe.only('ImageCarousel tests', () => {
    const mockData = [
        {title: 'ABC', url: 'abc.com'},
        {title: 'Hey', url: 'try.com'},
        {title: 'XYZ', url: 'xyz.in'},
        {title: 'Blog', url: 'blog.edu'},
    ]

    it('check if ImageCarousel renders', () => {
        render(<ImageCarousel images={mockData} />);

        const images = screen.getAllByRole('img');
        
        images.forEach((img, idx) => {
            // const image = screen.getByAltText(img.title);
            expect(img).toBeInTheDocument();
            expect(img).toHaveAttribute('alt', mockData[idx].title);
            expect(img).toHaveAttribute('src', mockData[idx].url);
        });
    });

    test("clicking on an image triggers expected interactions", () => {
        const handleNextSpy = jest.fn();
      
        render(<ImageCarousel images={mockData} />);
      
        // Click on an image
        fireEvent.click(screen.getByText("<"));
        // expect(handleNextSpy).toHaveBeenCalledWith("Hey");
      });

      test("handles edge cases when clicking previous and next buttons", () => {
        const mockData = [
            {title: 'ABC', url: 'abc.com'},
            {title: 'Hey', url: 'try.com'},
            {title: 'XYZ', url: 'xyz.in'},
            {title: 'Blog', url: 'blog.edu'},
        ]
      
        render(<ImageCarousel images={mockData} />);
      
        // Click next button at the last image
        fireEvent.click(screen.getByText(">"));
        expect(screen.getByAltText("Hey")).toBeInTheDocument();

        fireEvent.click(screen.getByText(">"));
        const img = screen.getByAltText("XYZ");
        expect(screen.getByAltText("XYZ")).toBeInTheDocument();
        expect(img.getAttribute('src')).toBe('xyz.in');
      
        // Click previous button at the first image
        fireEvent.click(screen.getByText("<"));
        expect(screen.getByAltText("Hey")).toBeInTheDocument();
      });


});