import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, CardContent } from './card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'

const orientations = ['horizontal', 'vertical'] as const

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: orientations },
  },
  decorators: [
    (Story) => (
      <div className="px-12 py-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const slides = [1, 2, 3, 4, 5]

const slide = (n: number) => (
  <Card>
    <CardContent className="flex aspect-square items-center justify-center">
      <span className="text-3xl font-semibold">{n}</span>
    </CardContent>
  </Card>
)

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {slides.map((n) => (
          <CarouselItem key={n}>{slide(n)}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const MultipleItems: Story = {
  render: (args) => (
    <Carousel {...args} opts={{ align: 'start' }} className="mx-auto w-full max-w-sm">
      <CarouselContent>
        {slides.map((n) => (
          <CarouselItem key={n} className="basis-1/2">
            {slide(n)}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <Carousel {...args} opts={{ align: 'start' }} className="mx-auto w-full max-w-xs">
      <CarouselContent className="h-48">
        {slides.map((n) => (
          <CarouselItem key={n} className="basis-1/2">
            <Card>
              <CardContent className="flex items-center justify-center py-4">
                <span className="text-2xl font-semibold">{n}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Loop: Story = {
  render: (args) => (
    <Carousel {...args} opts={{ loop: true }} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {slides.map((n) => (
          <CarouselItem key={n}>{slide(n)}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const SingleSlide: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>{slide(1)}</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const WithoutControls: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {slides.map((n) => (
          <CarouselItem key={n}>{slide(n)}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
}
