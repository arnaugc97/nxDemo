// Types
import { NewProduct } from '../../shared/types/product';

// Value Objects
import { UniqueId } from '../../shared/domain/value-objects/uniqueId';
import { Price } from '../../shared/domain/value-objects/price';
import { Discount } from '../../shared/domain/value-objects/discount';

export class Product {
  constructor(
    public readonly id: UniqueId,
    public readonly title: string,
    public readonly description: string,
    public readonly category: string, // Here we can check categories with value objects
    public readonly image: string | null,
    public readonly price: Price,
    public readonly discount: Discount
  ) {}

  static create({
    id,
    title,
    description,
    category,
    thumbnail,
    price,
    discountPercentage,
  }: NewProduct): Product {
    return new Product(
      UniqueId.create(id),
      title,
      description,
      category,
      thumbnail,
      Price.create(price),
      Discount.create(discountPercentage)
    );
  }
}
