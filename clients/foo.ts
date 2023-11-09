import { Foo } from "../foo";

export interface FooClient {
  foo: typeof Foo;
}

export const fooSvc: FooClient = {
  foo: Foo,
};
