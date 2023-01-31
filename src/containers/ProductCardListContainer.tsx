import Link from 'next/link'
import RectLoader from 'components/atoms/RectLoader'
import Box from 'components/layout/Box'
import ProductCard from 'components/organisms/ProductCard'
import ProductCardList from 'components/organisms/ProductCardList'
import useSearch from 'services/products/use-search'
import type { ApiContext, Category, Condition, Product } from 'types'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api/proxy',
}

interface ProductCardListContainerProps {
  category?: Category
  conditions?: Condition[]
}

const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  const { products, isLoading } = useSearch(context, {
    category,
    conditions,
  })

  return (
    <ProductCardList>
      {isLoading &&
        Array.from(Array(16), (_, k) => (
          <Box key={k}>
            <Box display={{ base: 'none', md: 'block' }}>
              <RectLoader width={320} height={320} />
            </Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <RectLoader width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!isLoading &&
        products.map((p: Product) => (
          <Box key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              <ProductCard
                variant="listing"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  )
}

export default ProductCardListContainer
