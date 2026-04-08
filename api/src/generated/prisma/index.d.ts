
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteItem
 * 
 */
export type RouteItem = $Result.DefaultSelection<Prisma.$RouteItemPayload>
/**
 * Model FriendShip
 * 
 */
export type FriendShip = $Result.DefaultSelection<Prisma.$FriendShipPayload>
/**
 * Model VisitedPlace
 * 
 */
export type VisitedPlace = $Result.DefaultSelection<Prisma.$VisitedPlacePayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const genderStatus: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type genderStatus = (typeof genderStatus)[keyof typeof genderStatus]


export const ActivityCategory: {
  HEALTH: 'HEALTH',
  ENTERTAINMENT: 'ENTERTAINMENT',
  ART: 'ART',
  FOOD: 'FOOD',
  TRAVEL: 'TRAVEL'
};

export type ActivityCategory = (typeof ActivityCategory)[keyof typeof ActivityCategory]


export const ActivityStatus: {
  OPEN: 'OPEN',
  FULL: 'FULL',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const FriendshipStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]

}

export type genderStatus = $Enums.genderStatus

export const genderStatus: typeof $Enums.genderStatus

export type ActivityCategory = $Enums.ActivityCategory

export const ActivityCategory: typeof $Enums.ActivityCategory

export type ActivityStatus = $Enums.ActivityStatus

export const ActivityStatus: typeof $Enums.ActivityStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeItem`: Exposes CRUD operations for the **RouteItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteItems
    * const routeItems = await prisma.routeItem.findMany()
    * ```
    */
  get routeItem(): Prisma.RouteItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendShip`: Exposes CRUD operations for the **FriendShip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendShips
    * const friendShips = await prisma.friendShip.findMany()
    * ```
    */
  get friendShip(): Prisma.FriendShipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitedPlace`: Exposes CRUD operations for the **VisitedPlace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitedPlaces
    * const visitedPlaces = await prisma.visitedPlace.findMany()
    * ```
    */
  get visitedPlace(): Prisma.VisitedPlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Activity: 'Activity',
    JoinRequest: 'JoinRequest',
    Place: 'Place',
    Review: 'Review',
    Route: 'Route',
    RouteItem: 'RouteItem',
    FriendShip: 'FriendShip',
    VisitedPlace: 'VisitedPlace',
    ChatGroup: 'ChatGroup',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "activity" | "joinRequest" | "place" | "review" | "route" | "routeItem" | "friendShip" | "visitedPlace" | "chatGroup" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteItem: {
        payload: Prisma.$RouteItemPayload<ExtArgs>
        fields: Prisma.RouteItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          findFirst: {
            args: Prisma.RouteItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          findMany: {
            args: Prisma.RouteItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>[]
          }
          create: {
            args: Prisma.RouteItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          createMany: {
            args: Prisma.RouteItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          update: {
            args: Prisma.RouteItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          deleteMany: {
            args: Prisma.RouteItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteItemPayload>
          }
          aggregate: {
            args: Prisma.RouteItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteItem>
          }
          groupBy: {
            args: Prisma.RouteItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteItemCountArgs<ExtArgs>
            result: $Utils.Optional<RouteItemCountAggregateOutputType> | number
          }
        }
      }
      FriendShip: {
        payload: Prisma.$FriendShipPayload<ExtArgs>
        fields: Prisma.FriendShipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendShipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendShipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          findFirst: {
            args: Prisma.FriendShipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendShipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          findMany: {
            args: Prisma.FriendShipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>[]
          }
          create: {
            args: Prisma.FriendShipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          createMany: {
            args: Prisma.FriendShipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FriendShipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          update: {
            args: Prisma.FriendShipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          deleteMany: {
            args: Prisma.FriendShipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendShipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendShipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendShipPayload>
          }
          aggregate: {
            args: Prisma.FriendShipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendShip>
          }
          groupBy: {
            args: Prisma.FriendShipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendShipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendShipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendShipCountAggregateOutputType> | number
          }
        }
      }
      VisitedPlace: {
        payload: Prisma.$VisitedPlacePayload<ExtArgs>
        fields: Prisma.VisitedPlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitedPlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitedPlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          findFirst: {
            args: Prisma.VisitedPlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitedPlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          findMany: {
            args: Prisma.VisitedPlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>[]
          }
          create: {
            args: Prisma.VisitedPlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          createMany: {
            args: Prisma.VisitedPlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisitedPlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          update: {
            args: Prisma.VisitedPlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          deleteMany: {
            args: Prisma.VisitedPlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitedPlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisitedPlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitedPlacePayload>
          }
          aggregate: {
            args: Prisma.VisitedPlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitedPlace>
          }
          groupBy: {
            args: Prisma.VisitedPlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitedPlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitedPlaceCountArgs<ExtArgs>
            result: $Utils.Optional<VisitedPlaceCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    activity?: ActivityOmit
    joinRequest?: JoinRequestOmit
    place?: PlaceOmit
    review?: ReviewOmit
    route?: RouteOmit
    routeItem?: RouteItemOmit
    friendShip?: FriendShipOmit
    visitedPlace?: VisitedPlaceOmit
    chatGroup?: ChatGroupOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdActivities: number
    joinRequests: number
    reviewsGiven: number
    reviewsReceived: number
    visitedPlaces: number
    messages: number
    createdRoutes: number
    sentFriendRequests: number
    receivedFriendRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdActivities?: boolean | UserCountOutputTypeCountCreatedActivitiesArgs
    joinRequests?: boolean | UserCountOutputTypeCountJoinRequestsArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
    visitedPlaces?: boolean | UserCountOutputTypeCountVisitedPlacesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    createdRoutes?: boolean | UserCountOutputTypeCountCreatedRoutesArgs
    sentFriendRequests?: boolean | UserCountOutputTypeCountSentFriendRequestsArgs
    receivedFriendRequests?: boolean | UserCountOutputTypeCountReceivedFriendRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitedPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitedPlaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendShipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendShipWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    joinRequests: number
    reviews: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    joinRequests?: boolean | ActivityCountOutputTypeCountJoinRequestsArgs
    reviews?: boolean | ActivityCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    visitedBy: number
    activities: number
    routeItems: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitedBy?: boolean | PlaceCountOutputTypeCountVisitedByArgs
    activities?: boolean | PlaceCountOutputTypeCountActivitiesArgs
    routeItems?: boolean | PlaceCountOutputTypeCountRouteItemsArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountVisitedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitedPlaceWhereInput
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountRouteItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteItemWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    items: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RouteCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteItemWhereInput
  }


  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    messages: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatGroupCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    trustScore: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    trustScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    gender: $Enums.genderStatus | null
    profileImg: string | null
    bio: string | null
    isVerified: boolean | null
    faceDescriptor: string | null
    trustScore: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    gender: $Enums.genderStatus | null
    profileImg: string | null
    bio: string | null
    isVerified: boolean | null
    faceDescriptor: string | null
    trustScore: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    gender: number
    profileImg: number
    bio: number
    isVerified: number
    faceDescriptor: number
    trustScore: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    trustScore?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    trustScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    profileImg?: true
    bio?: true
    isVerified?: true
    faceDescriptor?: true
    trustScore?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    profileImg?: true
    bio?: true
    isVerified?: true
    faceDescriptor?: true
    trustScore?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    gender?: true
    profileImg?: true
    bio?: true
    isVerified?: true
    faceDescriptor?: true
    trustScore?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg: string | null
    bio: string | null
    isVerified: boolean
    faceDescriptor: string | null
    trustScore: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    profileImg?: boolean
    bio?: boolean
    isVerified?: boolean
    faceDescriptor?: boolean
    trustScore?: boolean
    createdAt?: boolean
    createdActivities?: boolean | User$createdActivitiesArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    visitedPlaces?: boolean | User$visitedPlacesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    createdRoutes?: boolean | User$createdRoutesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    profileImg?: boolean
    bio?: boolean
    isVerified?: boolean
    faceDescriptor?: boolean
    trustScore?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "gender" | "profileImg" | "bio" | "isVerified" | "faceDescriptor" | "trustScore" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdActivities?: boolean | User$createdActivitiesArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    visitedPlaces?: boolean | User$visitedPlacesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    createdRoutes?: boolean | User$createdRoutesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdActivities: Prisma.$ActivityPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      visitedPlaces: Prisma.$VisitedPlacePayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      createdRoutes: Prisma.$RoutePayload<ExtArgs>[]
      sentFriendRequests: Prisma.$FriendShipPayload<ExtArgs>[]
      receivedFriendRequests: Prisma.$FriendShipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      gender: $Enums.genderStatus
      profileImg: string | null
      bio: string | null
      isVerified: boolean
      faceDescriptor: string | null
      trustScore: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdActivities<T extends User$createdActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends User$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitedPlaces<T extends User$visitedPlacesArgs<ExtArgs> = {}>(args?: Subset<T, User$visitedPlacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRoutes<T extends User$createdRoutesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendRequests<T extends User$sentFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendRequests<T extends User$receivedFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'genderStatus'>
    readonly profileImg: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly faceDescriptor: FieldRef<"User", 'String'>
    readonly trustScore: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdActivities
   */
  export type User$createdActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.joinRequests
   */
  export type User$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.visitedPlaces
   */
  export type User$visitedPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    where?: VisitedPlaceWhereInput
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    cursor?: VisitedPlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitedPlaceScalarFieldEnum | VisitedPlaceScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.createdRoutes
   */
  export type User$createdRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User.sentFriendRequests
   */
  export type User$sentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    where?: FriendShipWhereInput
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    cursor?: FriendShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendShipScalarFieldEnum | FriendShipScalarFieldEnum[]
  }

  /**
   * User.receivedFriendRequests
   */
  export type User$receivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    where?: FriendShipWhereInput
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    cursor?: FriendShipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendShipScalarFieldEnum | FriendShipScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    maxParticipants: number | null
    hostId: number | null
    placeId: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    maxParticipants: number | null
    hostId: number | null
    placeId: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    category: $Enums.ActivityCategory | null
    title: string | null
    description: string | null
    maxParticipants: number | null
    status: $Enums.ActivityStatus | null
    eventStartDate: Date | null
    eventEndDate: Date | null
    isPublic: boolean | null
    createdAt: Date | null
    hostId: number | null
    placeId: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    category: $Enums.ActivityCategory | null
    title: string | null
    description: string | null
    maxParticipants: number | null
    status: $Enums.ActivityStatus | null
    eventStartDate: Date | null
    eventEndDate: Date | null
    isPublic: boolean | null
    createdAt: Date | null
    hostId: number | null
    placeId: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    category: number
    title: number
    description: number
    maxParticipants: number
    status: number
    eventStartDate: number
    eventEndDate: number
    isPublic: number
    createdAt: number
    hostId: number
    placeId: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    maxParticipants?: true
    hostId?: true
    placeId?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    maxParticipants?: true
    hostId?: true
    placeId?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    maxParticipants?: true
    status?: true
    eventStartDate?: true
    eventEndDate?: true
    isPublic?: true
    createdAt?: true
    hostId?: true
    placeId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    maxParticipants?: true
    status?: true
    eventStartDate?: true
    eventEndDate?: true
    isPublic?: true
    createdAt?: true
    hostId?: true
    placeId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    category?: true
    title?: true
    description?: true
    maxParticipants?: true
    status?: true
    eventStartDate?: true
    eventEndDate?: true
    isPublic?: true
    createdAt?: true
    hostId?: true
    placeId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status: $Enums.ActivityStatus
    eventStartDate: Date
    eventEndDate: Date
    isPublic: boolean
    createdAt: Date
    hostId: number
    placeId: number | null
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    maxParticipants?: boolean
    status?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    isPublic?: boolean
    createdAt?: boolean
    hostId?: boolean
    placeId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    place?: boolean | Activity$placeArgs<ExtArgs>
    joinRequests?: boolean | Activity$joinRequestsArgs<ExtArgs>
    reviews?: boolean | Activity$reviewsArgs<ExtArgs>
    chatGroup?: boolean | Activity$chatGroupArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    maxParticipants?: boolean
    status?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    isPublic?: boolean
    createdAt?: boolean
    hostId?: boolean
    placeId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "title" | "description" | "maxParticipants" | "status" | "eventStartDate" | "eventEndDate" | "isPublic" | "createdAt" | "hostId" | "placeId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    place?: boolean | Activity$placeArgs<ExtArgs>
    joinRequests?: boolean | Activity$joinRequestsArgs<ExtArgs>
    reviews?: boolean | Activity$reviewsArgs<ExtArgs>
    chatGroup?: boolean | Activity$chatGroupArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs> | null
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.ActivityCategory
      title: string
      description: string
      maxParticipants: number
      status: $Enums.ActivityStatus
      eventStartDate: Date
      eventEndDate: Date
      isPublic: boolean
      createdAt: Date
      hostId: number
      placeId: number | null
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place<T extends Activity$placeArgs<ExtArgs> = {}>(args?: Subset<T, Activity$placeArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    joinRequests<T extends Activity$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Activity$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatGroup<T extends Activity$chatGroupArgs<ExtArgs> = {}>(args?: Subset<T, Activity$chatGroupArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly category: FieldRef<"Activity", 'ActivityCategory'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly maxParticipants: FieldRef<"Activity", 'Int'>
    readonly status: FieldRef<"Activity", 'ActivityStatus'>
    readonly eventStartDate: FieldRef<"Activity", 'DateTime'>
    readonly eventEndDate: FieldRef<"Activity", 'DateTime'>
    readonly isPublic: FieldRef<"Activity", 'Boolean'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly hostId: FieldRef<"Activity", 'Int'>
    readonly placeId: FieldRef<"Activity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.place
   */
  export type Activity$placeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
  }

  /**
   * Activity.joinRequests
   */
  export type Activity$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * Activity.reviews
   */
  export type Activity$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Activity.chatGroup
   */
  export type Activity$chatGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _avg: JoinRequestAvgAggregateOutputType | null
    _sum: JoinRequestSumAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    activityId: number | null
  }

  export type JoinRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    activityId: number | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: number | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    userId: number | null
    activityId: number | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: number | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    userId: number | null
    activityId: number | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    userId: number
    activityId: number
    _all: number
  }


  export type JoinRequestAvgAggregateInputType = {
    id?: true
    userId?: true
    activityId?: true
  }

  export type JoinRequestSumAggregateInputType = {
    id?: true
    userId?: true
    activityId?: true
  }

  export type JoinRequestMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    userId?: true
    activityId?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    userId?: true
    activityId?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    userId?: true
    activityId?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoinRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoinRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _avg?: JoinRequestAvgAggregateInputType
    _sum?: JoinRequestSumAggregateInputType
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: number
    status: $Enums.RequestStatus
    createdAt: Date
    userId: number
    activityId: number
    _count: JoinRequestCountAggregateOutputType | null
    _avg: JoinRequestAvgAggregateOutputType | null
    _sum: JoinRequestSumAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    activityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>



  export type JoinRequestSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    activityId?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "userId" | "activityId", ExtArgs["result"]["joinRequest"]>
  export type JoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.RequestStatus
      createdAt: Date
      userId: number
      activityId: number
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'Int'>
    readonly status: FieldRef<"JoinRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
    readonly userId: FieldRef<"JoinRequest", 'Int'>
    readonly activityId: FieldRef<"JoinRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PlaceSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: number | null
    placeName: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: number | null
    placeName: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    placeName: number
    latitude: number
    longitude: number
    address: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type PlaceSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    placeName?: true
    latitude?: true
    longitude?: true
    address?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    placeName?: true
    latitude?: true
    longitude?: true
    address?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    placeName?: true
    latitude?: true
    longitude?: true
    address?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: number
    placeName: string
    latitude: number
    longitude: number
    address: string | null
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    visitedBy?: boolean | Place$visitedByArgs<ExtArgs>
    activities?: boolean | Place$activitiesArgs<ExtArgs>
    routeItems?: boolean | Place$routeItemsArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>



  export type PlaceSelectScalar = {
    id?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placeName" | "latitude" | "longitude" | "address", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitedBy?: boolean | Place$visitedByArgs<ExtArgs>
    activities?: boolean | Place$activitiesArgs<ExtArgs>
    routeItems?: boolean | Place$routeItemsArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      visitedBy: Prisma.$VisitedPlacePayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      routeItems: Prisma.$RouteItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      placeName: string
      latitude: number
      longitude: number
      address: string | null
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitedBy<T extends Place$visitedByArgs<ExtArgs> = {}>(args?: Subset<T, Place$visitedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Place$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Place$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeItems<T extends Place$routeItemsArgs<ExtArgs> = {}>(args?: Subset<T, Place$routeItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Place model
   */
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'Int'>
    readonly placeName: FieldRef<"Place", 'String'>
    readonly latitude: FieldRef<"Place", 'Float'>
    readonly longitude: FieldRef<"Place", 'Float'>
    readonly address: FieldRef<"Place", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Place.visitedBy
   */
  export type Place$visitedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    where?: VisitedPlaceWhereInput
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    cursor?: VisitedPlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitedPlaceScalarFieldEnum | VisitedPlaceScalarFieldEnum[]
  }

  /**
   * Place.activities
   */
  export type Place$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Place.routeItems
   */
  export type Place$routeItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    where?: RouteItemWhereInput
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    cursor?: RouteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteItemScalarFieldEnum | RouteItemScalarFieldEnum[]
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    reviewerId: number | null
    receiverId: number | null
    activityId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    reviewerId: number | null
    receiverId: number | null
    activityId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    imageUrl: string | null
    createdAt: Date | null
    reviewerId: number | null
    receiverId: number | null
    activityId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    imageUrl: string | null
    createdAt: Date | null
    reviewerId: number | null
    receiverId: number | null
    activityId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    imageUrl: number
    createdAt: number
    reviewerId: number
    receiverId: number
    activityId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    reviewerId?: true
    receiverId?: true
    activityId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    reviewerId?: true
    receiverId?: true
    activityId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    imageUrl?: true
    createdAt?: true
    reviewerId?: true
    receiverId?: true
    activityId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    imageUrl?: true
    createdAt?: true
    reviewerId?: true
    receiverId?: true
    activityId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    imageUrl?: true
    createdAt?: true
    reviewerId?: true
    receiverId?: true
    activityId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    imageUrl: string | null
    createdAt: Date
    reviewerId: number
    receiverId: number | null
    activityId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    activityId?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Review$receiverArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    activityId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "imageUrl" | "createdAt" | "reviewerId" | "receiverId" | "activityId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Review$receiverArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      imageUrl: string | null
      createdAt: Date
      reviewerId: number
      receiverId: number | null
      activityId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends Review$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Review$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly imageUrl: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly reviewerId: FieldRef<"Review", 'Int'>
    readonly receiverId: FieldRef<"Review", 'Int'>
    readonly activityId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.receiver
   */
  export type Review$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creatorId: number | null
    createdAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creatorId: number | null
    createdAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creatorId: number
    createdAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    name: string
    description: string | null
    creatorId: number
    createdAt: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Route$itemsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>



  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "creatorId" | "createdAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Route$itemsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$RouteItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      creatorId: number
      createdAt: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Route$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Route$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly description: FieldRef<"Route", 'String'>
    readonly creatorId: FieldRef<"Route", 'Int'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.items
   */
  export type Route$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    where?: RouteItemWhereInput
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    cursor?: RouteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteItemScalarFieldEnum | RouteItemScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteItem
   */

  export type AggregateRouteItem = {
    _count: RouteItemCountAggregateOutputType | null
    _avg: RouteItemAvgAggregateOutputType | null
    _sum: RouteItemSumAggregateOutputType | null
    _min: RouteItemMinAggregateOutputType | null
    _max: RouteItemMaxAggregateOutputType | null
  }

  export type RouteItemAvgAggregateOutputType = {
    id: number | null
    order: number | null
    routeId: number | null
    placeId: number | null
  }

  export type RouteItemSumAggregateOutputType = {
    id: number | null
    order: number | null
    routeId: number | null
    placeId: number | null
  }

  export type RouteItemMinAggregateOutputType = {
    id: number | null
    order: number | null
    routeId: number | null
    placeId: number | null
  }

  export type RouteItemMaxAggregateOutputType = {
    id: number | null
    order: number | null
    routeId: number | null
    placeId: number | null
  }

  export type RouteItemCountAggregateOutputType = {
    id: number
    order: number
    routeId: number
    placeId: number
    _all: number
  }


  export type RouteItemAvgAggregateInputType = {
    id?: true
    order?: true
    routeId?: true
    placeId?: true
  }

  export type RouteItemSumAggregateInputType = {
    id?: true
    order?: true
    routeId?: true
    placeId?: true
  }

  export type RouteItemMinAggregateInputType = {
    id?: true
    order?: true
    routeId?: true
    placeId?: true
  }

  export type RouteItemMaxAggregateInputType = {
    id?: true
    order?: true
    routeId?: true
    placeId?: true
  }

  export type RouteItemCountAggregateInputType = {
    id?: true
    order?: true
    routeId?: true
    placeId?: true
    _all?: true
  }

  export type RouteItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteItem to aggregate.
     */
    where?: RouteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteItems to fetch.
     */
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteItems
    **/
    _count?: true | RouteItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteItemMaxAggregateInputType
  }

  export type GetRouteItemAggregateType<T extends RouteItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteItem[P]>
      : GetScalarType<T[P], AggregateRouteItem[P]>
  }




  export type RouteItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteItemWhereInput
    orderBy?: RouteItemOrderByWithAggregationInput | RouteItemOrderByWithAggregationInput[]
    by: RouteItemScalarFieldEnum[] | RouteItemScalarFieldEnum
    having?: RouteItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteItemCountAggregateInputType | true
    _avg?: RouteItemAvgAggregateInputType
    _sum?: RouteItemSumAggregateInputType
    _min?: RouteItemMinAggregateInputType
    _max?: RouteItemMaxAggregateInputType
  }

  export type RouteItemGroupByOutputType = {
    id: number
    order: number
    routeId: number
    placeId: number
    _count: RouteItemCountAggregateOutputType | null
    _avg: RouteItemAvgAggregateOutputType | null
    _sum: RouteItemSumAggregateOutputType | null
    _min: RouteItemMinAggregateOutputType | null
    _max: RouteItemMaxAggregateOutputType | null
  }

  type GetRouteItemGroupByPayload<T extends RouteItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteItemGroupByOutputType[P]>
            : GetScalarType<T[P], RouteItemGroupByOutputType[P]>
        }
      >
    >


  export type RouteItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    routeId?: boolean
    placeId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeItem"]>



  export type RouteItemSelectScalar = {
    id?: boolean
    order?: boolean
    routeId?: boolean
    placeId?: boolean
  }

  export type RouteItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "routeId" | "placeId", ExtArgs["result"]["routeItem"]>
  export type RouteItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $RouteItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteItem"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order: number
      routeId: number
      placeId: number
    }, ExtArgs["result"]["routeItem"]>
    composites: {}
  }

  type RouteItemGetPayload<S extends boolean | null | undefined | RouteItemDefaultArgs> = $Result.GetResult<Prisma.$RouteItemPayload, S>

  type RouteItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteItemCountAggregateInputType | true
    }

  export interface RouteItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteItem'], meta: { name: 'RouteItem' } }
    /**
     * Find zero or one RouteItem that matches the filter.
     * @param {RouteItemFindUniqueArgs} args - Arguments to find a RouteItem
     * @example
     * // Get one RouteItem
     * const routeItem = await prisma.routeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteItemFindUniqueArgs>(args: SelectSubset<T, RouteItemFindUniqueArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteItemFindUniqueOrThrowArgs} args - Arguments to find a RouteItem
     * @example
     * // Get one RouteItem
     * const routeItem = await prisma.routeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemFindFirstArgs} args - Arguments to find a RouteItem
     * @example
     * // Get one RouteItem
     * const routeItem = await prisma.routeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteItemFindFirstArgs>(args?: SelectSubset<T, RouteItemFindFirstArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemFindFirstOrThrowArgs} args - Arguments to find a RouteItem
     * @example
     * // Get one RouteItem
     * const routeItem = await prisma.routeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteItems
     * const routeItems = await prisma.routeItem.findMany()
     * 
     * // Get first 10 RouteItems
     * const routeItems = await prisma.routeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeItemWithIdOnly = await prisma.routeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteItemFindManyArgs>(args?: SelectSubset<T, RouteItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteItem.
     * @param {RouteItemCreateArgs} args - Arguments to create a RouteItem.
     * @example
     * // Create one RouteItem
     * const RouteItem = await prisma.routeItem.create({
     *   data: {
     *     // ... data to create a RouteItem
     *   }
     * })
     * 
     */
    create<T extends RouteItemCreateArgs>(args: SelectSubset<T, RouteItemCreateArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteItems.
     * @param {RouteItemCreateManyArgs} args - Arguments to create many RouteItems.
     * @example
     * // Create many RouteItems
     * const routeItem = await prisma.routeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteItemCreateManyArgs>(args?: SelectSubset<T, RouteItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RouteItem.
     * @param {RouteItemDeleteArgs} args - Arguments to delete one RouteItem.
     * @example
     * // Delete one RouteItem
     * const RouteItem = await prisma.routeItem.delete({
     *   where: {
     *     // ... filter to delete one RouteItem
     *   }
     * })
     * 
     */
    delete<T extends RouteItemDeleteArgs>(args: SelectSubset<T, RouteItemDeleteArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteItem.
     * @param {RouteItemUpdateArgs} args - Arguments to update one RouteItem.
     * @example
     * // Update one RouteItem
     * const routeItem = await prisma.routeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteItemUpdateArgs>(args: SelectSubset<T, RouteItemUpdateArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteItems.
     * @param {RouteItemDeleteManyArgs} args - Arguments to filter RouteItems to delete.
     * @example
     * // Delete a few RouteItems
     * const { count } = await prisma.routeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteItemDeleteManyArgs>(args?: SelectSubset<T, RouteItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteItems
     * const routeItem = await prisma.routeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteItemUpdateManyArgs>(args: SelectSubset<T, RouteItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RouteItem.
     * @param {RouteItemUpsertArgs} args - Arguments to update or create a RouteItem.
     * @example
     * // Update or create a RouteItem
     * const routeItem = await prisma.routeItem.upsert({
     *   create: {
     *     // ... data to create a RouteItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteItem we want to update
     *   }
     * })
     */
    upsert<T extends RouteItemUpsertArgs>(args: SelectSubset<T, RouteItemUpsertArgs<ExtArgs>>): Prisma__RouteItemClient<$Result.GetResult<Prisma.$RouteItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemCountArgs} args - Arguments to filter RouteItems to count.
     * @example
     * // Count the number of RouteItems
     * const count = await prisma.routeItem.count({
     *   where: {
     *     // ... the filter for the RouteItems we want to count
     *   }
     * })
    **/
    count<T extends RouteItemCountArgs>(
      args?: Subset<T, RouteItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteItemAggregateArgs>(args: Subset<T, RouteItemAggregateArgs>): Prisma.PrismaPromise<GetRouteItemAggregateType<T>>

    /**
     * Group by RouteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteItemGroupByArgs['orderBy'] }
        : { orderBy?: RouteItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteItem model
   */
  readonly fields: RouteItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteItem model
   */
  interface RouteItemFieldRefs {
    readonly id: FieldRef<"RouteItem", 'Int'>
    readonly order: FieldRef<"RouteItem", 'Int'>
    readonly routeId: FieldRef<"RouteItem", 'Int'>
    readonly placeId: FieldRef<"RouteItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteItem findUnique
   */
  export type RouteItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter, which RouteItem to fetch.
     */
    where: RouteItemWhereUniqueInput
  }

  /**
   * RouteItem findUniqueOrThrow
   */
  export type RouteItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter, which RouteItem to fetch.
     */
    where: RouteItemWhereUniqueInput
  }

  /**
   * RouteItem findFirst
   */
  export type RouteItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter, which RouteItem to fetch.
     */
    where?: RouteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteItems to fetch.
     */
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteItems.
     */
    cursor?: RouteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteItems.
     */
    distinct?: RouteItemScalarFieldEnum | RouteItemScalarFieldEnum[]
  }

  /**
   * RouteItem findFirstOrThrow
   */
  export type RouteItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter, which RouteItem to fetch.
     */
    where?: RouteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteItems to fetch.
     */
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteItems.
     */
    cursor?: RouteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteItems.
     */
    distinct?: RouteItemScalarFieldEnum | RouteItemScalarFieldEnum[]
  }

  /**
   * RouteItem findMany
   */
  export type RouteItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter, which RouteItems to fetch.
     */
    where?: RouteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteItems to fetch.
     */
    orderBy?: RouteItemOrderByWithRelationInput | RouteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteItems.
     */
    cursor?: RouteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteItems.
     */
    distinct?: RouteItemScalarFieldEnum | RouteItemScalarFieldEnum[]
  }

  /**
   * RouteItem create
   */
  export type RouteItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteItem.
     */
    data: XOR<RouteItemCreateInput, RouteItemUncheckedCreateInput>
  }

  /**
   * RouteItem createMany
   */
  export type RouteItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteItems.
     */
    data: RouteItemCreateManyInput | RouteItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteItem update
   */
  export type RouteItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteItem.
     */
    data: XOR<RouteItemUpdateInput, RouteItemUncheckedUpdateInput>
    /**
     * Choose, which RouteItem to update.
     */
    where: RouteItemWhereUniqueInput
  }

  /**
   * RouteItem updateMany
   */
  export type RouteItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteItems.
     */
    data: XOR<RouteItemUpdateManyMutationInput, RouteItemUncheckedUpdateManyInput>
    /**
     * Filter which RouteItems to update
     */
    where?: RouteItemWhereInput
    /**
     * Limit how many RouteItems to update.
     */
    limit?: number
  }

  /**
   * RouteItem upsert
   */
  export type RouteItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteItem to update in case it exists.
     */
    where: RouteItemWhereUniqueInput
    /**
     * In case the RouteItem found by the `where` argument doesn't exist, create a new RouteItem with this data.
     */
    create: XOR<RouteItemCreateInput, RouteItemUncheckedCreateInput>
    /**
     * In case the RouteItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteItemUpdateInput, RouteItemUncheckedUpdateInput>
  }

  /**
   * RouteItem delete
   */
  export type RouteItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
    /**
     * Filter which RouteItem to delete.
     */
    where: RouteItemWhereUniqueInput
  }

  /**
   * RouteItem deleteMany
   */
  export type RouteItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteItems to delete
     */
    where?: RouteItemWhereInput
    /**
     * Limit how many RouteItems to delete.
     */
    limit?: number
  }

  /**
   * RouteItem without action
   */
  export type RouteItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteItem
     */
    select?: RouteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteItem
     */
    omit?: RouteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteItemInclude<ExtArgs> | null
  }


  /**
   * Model FriendShip
   */

  export type AggregateFriendShip = {
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  export type FriendShipAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendShipSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendShipMinAggregateOutputType = {
    id: number | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendShipMaxAggregateOutputType = {
    id: number | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendShipCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type FriendShipAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendShipSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendShipMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendShipMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendShipCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type FriendShipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendShip to aggregate.
     */
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     */
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendShips
    **/
    _count?: true | FriendShipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendShipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendShipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendShipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendShipMaxAggregateInputType
  }

  export type GetFriendShipAggregateType<T extends FriendShipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendShip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendShip[P]>
      : GetScalarType<T[P], AggregateFriendShip[P]>
  }




  export type FriendShipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendShipWhereInput
    orderBy?: FriendShipOrderByWithAggregationInput | FriendShipOrderByWithAggregationInput[]
    by: FriendShipScalarFieldEnum[] | FriendShipScalarFieldEnum
    having?: FriendShipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendShipCountAggregateInputType | true
    _avg?: FriendShipAvgAggregateInputType
    _sum?: FriendShipSumAggregateInputType
    _min?: FriendShipMinAggregateInputType
    _max?: FriendShipMaxAggregateInputType
  }

  export type FriendShipGroupByOutputType = {
    id: number
    status: $Enums.FriendshipStatus
    createdAt: Date
    senderId: number
    receiverId: number
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  type GetFriendShipGroupByPayload<T extends FriendShipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendShipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendShipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
        }
      >
    >


  export type FriendShipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendShip"]>



  export type FriendShipSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type FriendShipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "senderId" | "receiverId", ExtArgs["result"]["friendShip"]>
  export type FriendShipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendShipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendShip"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.FriendshipStatus
      createdAt: Date
      senderId: number
      receiverId: number
    }, ExtArgs["result"]["friendShip"]>
    composites: {}
  }

  type FriendShipGetPayload<S extends boolean | null | undefined | FriendShipDefaultArgs> = $Result.GetResult<Prisma.$FriendShipPayload, S>

  type FriendShipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendShipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendShipCountAggregateInputType | true
    }

  export interface FriendShipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendShip'], meta: { name: 'FriendShip' } }
    /**
     * Find zero or one FriendShip that matches the filter.
     * @param {FriendShipFindUniqueArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendShipFindUniqueArgs>(args: SelectSubset<T, FriendShipFindUniqueArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendShip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendShipFindUniqueOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendShipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendShipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendShip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendShipFindFirstArgs>(args?: SelectSubset<T, FriendShipFindFirstArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendShip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendShipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendShipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendShips
     * const friendShips = await prisma.friendShip.findMany()
     * 
     * // Get first 10 FriendShips
     * const friendShips = await prisma.friendShip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendShipWithIdOnly = await prisma.friendShip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendShipFindManyArgs>(args?: SelectSubset<T, FriendShipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendShip.
     * @param {FriendShipCreateArgs} args - Arguments to create a FriendShip.
     * @example
     * // Create one FriendShip
     * const FriendShip = await prisma.friendShip.create({
     *   data: {
     *     // ... data to create a FriendShip
     *   }
     * })
     * 
     */
    create<T extends FriendShipCreateArgs>(args: SelectSubset<T, FriendShipCreateArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendShips.
     * @param {FriendShipCreateManyArgs} args - Arguments to create many FriendShips.
     * @example
     * // Create many FriendShips
     * const friendShip = await prisma.friendShip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendShipCreateManyArgs>(args?: SelectSubset<T, FriendShipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FriendShip.
     * @param {FriendShipDeleteArgs} args - Arguments to delete one FriendShip.
     * @example
     * // Delete one FriendShip
     * const FriendShip = await prisma.friendShip.delete({
     *   where: {
     *     // ... filter to delete one FriendShip
     *   }
     * })
     * 
     */
    delete<T extends FriendShipDeleteArgs>(args: SelectSubset<T, FriendShipDeleteArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendShip.
     * @param {FriendShipUpdateArgs} args - Arguments to update one FriendShip.
     * @example
     * // Update one FriendShip
     * const friendShip = await prisma.friendShip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendShipUpdateArgs>(args: SelectSubset<T, FriendShipUpdateArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendShips.
     * @param {FriendShipDeleteManyArgs} args - Arguments to filter FriendShips to delete.
     * @example
     * // Delete a few FriendShips
     * const { count } = await prisma.friendShip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendShipDeleteManyArgs>(args?: SelectSubset<T, FriendShipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendShips
     * const friendShip = await prisma.friendShip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendShipUpdateManyArgs>(args: SelectSubset<T, FriendShipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendShip.
     * @param {FriendShipUpsertArgs} args - Arguments to update or create a FriendShip.
     * @example
     * // Update or create a FriendShip
     * const friendShip = await prisma.friendShip.upsert({
     *   create: {
     *     // ... data to create a FriendShip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendShip we want to update
     *   }
     * })
     */
    upsert<T extends FriendShipUpsertArgs>(args: SelectSubset<T, FriendShipUpsertArgs<ExtArgs>>): Prisma__FriendShipClient<$Result.GetResult<Prisma.$FriendShipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipCountArgs} args - Arguments to filter FriendShips to count.
     * @example
     * // Count the number of FriendShips
     * const count = await prisma.friendShip.count({
     *   where: {
     *     // ... the filter for the FriendShips we want to count
     *   }
     * })
    **/
    count<T extends FriendShipCountArgs>(
      args?: Subset<T, FriendShipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendShipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendShipAggregateArgs>(args: Subset<T, FriendShipAggregateArgs>): Prisma.PrismaPromise<GetFriendShipAggregateType<T>>

    /**
     * Group by FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendShipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendShipGroupByArgs['orderBy'] }
        : { orderBy?: FriendShipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendShipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendShipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendShip model
   */
  readonly fields: FriendShipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendShip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendShipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FriendShip model
   */
  interface FriendShipFieldRefs {
    readonly id: FieldRef<"FriendShip", 'Int'>
    readonly status: FieldRef<"FriendShip", 'FriendshipStatus'>
    readonly createdAt: FieldRef<"FriendShip", 'DateTime'>
    readonly senderId: FieldRef<"FriendShip", 'Int'>
    readonly receiverId: FieldRef<"FriendShip", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FriendShip findUnique
   */
  export type FriendShipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter, which FriendShip to fetch.
     */
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip findUniqueOrThrow
   */
  export type FriendShipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter, which FriendShip to fetch.
     */
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip findFirst
   */
  export type FriendShipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter, which FriendShip to fetch.
     */
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     */
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendShips.
     */
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     */
    distinct?: FriendShipScalarFieldEnum | FriendShipScalarFieldEnum[]
  }

  /**
   * FriendShip findFirstOrThrow
   */
  export type FriendShipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter, which FriendShip to fetch.
     */
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     */
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendShips.
     */
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     */
    distinct?: FriendShipScalarFieldEnum | FriendShipScalarFieldEnum[]
  }

  /**
   * FriendShip findMany
   */
  export type FriendShipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter, which FriendShips to fetch.
     */
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     */
    orderBy?: FriendShipOrderByWithRelationInput | FriendShipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendShips.
     */
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     */
    distinct?: FriendShipScalarFieldEnum | FriendShipScalarFieldEnum[]
  }

  /**
   * FriendShip create
   */
  export type FriendShipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendShip.
     */
    data: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
  }

  /**
   * FriendShip createMany
   */
  export type FriendShipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendShips.
     */
    data: FriendShipCreateManyInput | FriendShipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FriendShip update
   */
  export type FriendShipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendShip.
     */
    data: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
    /**
     * Choose, which FriendShip to update.
     */
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip updateMany
   */
  export type FriendShipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendShips.
     */
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyInput>
    /**
     * Filter which FriendShips to update
     */
    where?: FriendShipWhereInput
    /**
     * Limit how many FriendShips to update.
     */
    limit?: number
  }

  /**
   * FriendShip upsert
   */
  export type FriendShipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendShip to update in case it exists.
     */
    where: FriendShipWhereUniqueInput
    /**
     * In case the FriendShip found by the `where` argument doesn't exist, create a new FriendShip with this data.
     */
    create: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
    /**
     * In case the FriendShip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
  }

  /**
   * FriendShip delete
   */
  export type FriendShipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
    /**
     * Filter which FriendShip to delete.
     */
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip deleteMany
   */
  export type FriendShipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendShips to delete
     */
    where?: FriendShipWhereInput
    /**
     * Limit how many FriendShips to delete.
     */
    limit?: number
  }

  /**
   * FriendShip without action
   */
  export type FriendShipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendShip
     */
    select?: FriendShipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendShip
     */
    omit?: FriendShipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendShipInclude<ExtArgs> | null
  }


  /**
   * Model VisitedPlace
   */

  export type AggregateVisitedPlace = {
    _count: VisitedPlaceCountAggregateOutputType | null
    _avg: VisitedPlaceAvgAggregateOutputType | null
    _sum: VisitedPlaceSumAggregateOutputType | null
    _min: VisitedPlaceMinAggregateOutputType | null
    _max: VisitedPlaceMaxAggregateOutputType | null
  }

  export type VisitedPlaceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    placeId: number | null
  }

  export type VisitedPlaceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    placeId: number | null
  }

  export type VisitedPlaceMinAggregateOutputType = {
    id: number | null
    at: Date | null
    userId: number | null
    placeId: number | null
  }

  export type VisitedPlaceMaxAggregateOutputType = {
    id: number | null
    at: Date | null
    userId: number | null
    placeId: number | null
  }

  export type VisitedPlaceCountAggregateOutputType = {
    id: number
    at: number
    userId: number
    placeId: number
    _all: number
  }


  export type VisitedPlaceAvgAggregateInputType = {
    id?: true
    userId?: true
    placeId?: true
  }

  export type VisitedPlaceSumAggregateInputType = {
    id?: true
    userId?: true
    placeId?: true
  }

  export type VisitedPlaceMinAggregateInputType = {
    id?: true
    at?: true
    userId?: true
    placeId?: true
  }

  export type VisitedPlaceMaxAggregateInputType = {
    id?: true
    at?: true
    userId?: true
    placeId?: true
  }

  export type VisitedPlaceCountAggregateInputType = {
    id?: true
    at?: true
    userId?: true
    placeId?: true
    _all?: true
  }

  export type VisitedPlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitedPlace to aggregate.
     */
    where?: VisitedPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitedPlaces to fetch.
     */
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitedPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitedPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitedPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitedPlaces
    **/
    _count?: true | VisitedPlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitedPlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitedPlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitedPlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitedPlaceMaxAggregateInputType
  }

  export type GetVisitedPlaceAggregateType<T extends VisitedPlaceAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitedPlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitedPlace[P]>
      : GetScalarType<T[P], AggregateVisitedPlace[P]>
  }




  export type VisitedPlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitedPlaceWhereInput
    orderBy?: VisitedPlaceOrderByWithAggregationInput | VisitedPlaceOrderByWithAggregationInput[]
    by: VisitedPlaceScalarFieldEnum[] | VisitedPlaceScalarFieldEnum
    having?: VisitedPlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitedPlaceCountAggregateInputType | true
    _avg?: VisitedPlaceAvgAggregateInputType
    _sum?: VisitedPlaceSumAggregateInputType
    _min?: VisitedPlaceMinAggregateInputType
    _max?: VisitedPlaceMaxAggregateInputType
  }

  export type VisitedPlaceGroupByOutputType = {
    id: number
    at: Date
    userId: number
    placeId: number
    _count: VisitedPlaceCountAggregateOutputType | null
    _avg: VisitedPlaceAvgAggregateOutputType | null
    _sum: VisitedPlaceSumAggregateOutputType | null
    _min: VisitedPlaceMinAggregateOutputType | null
    _max: VisitedPlaceMaxAggregateOutputType | null
  }

  type GetVisitedPlaceGroupByPayload<T extends VisitedPlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitedPlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitedPlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitedPlaceGroupByOutputType[P]>
            : GetScalarType<T[P], VisitedPlaceGroupByOutputType[P]>
        }
      >
    >


  export type VisitedPlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    at?: boolean
    userId?: boolean
    placeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitedPlace"]>



  export type VisitedPlaceSelectScalar = {
    id?: boolean
    at?: boolean
    userId?: boolean
    placeId?: boolean
  }

  export type VisitedPlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "at" | "userId" | "placeId", ExtArgs["result"]["visitedPlace"]>
  export type VisitedPlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $VisitedPlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitedPlace"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      at: Date
      userId: number
      placeId: number
    }, ExtArgs["result"]["visitedPlace"]>
    composites: {}
  }

  type VisitedPlaceGetPayload<S extends boolean | null | undefined | VisitedPlaceDefaultArgs> = $Result.GetResult<Prisma.$VisitedPlacePayload, S>

  type VisitedPlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitedPlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitedPlaceCountAggregateInputType | true
    }

  export interface VisitedPlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitedPlace'], meta: { name: 'VisitedPlace' } }
    /**
     * Find zero or one VisitedPlace that matches the filter.
     * @param {VisitedPlaceFindUniqueArgs} args - Arguments to find a VisitedPlace
     * @example
     * // Get one VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitedPlaceFindUniqueArgs>(args: SelectSubset<T, VisitedPlaceFindUniqueArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitedPlace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitedPlaceFindUniqueOrThrowArgs} args - Arguments to find a VisitedPlace
     * @example
     * // Get one VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitedPlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitedPlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitedPlace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceFindFirstArgs} args - Arguments to find a VisitedPlace
     * @example
     * // Get one VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitedPlaceFindFirstArgs>(args?: SelectSubset<T, VisitedPlaceFindFirstArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitedPlace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceFindFirstOrThrowArgs} args - Arguments to find a VisitedPlace
     * @example
     * // Get one VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitedPlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitedPlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitedPlaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitedPlaces
     * const visitedPlaces = await prisma.visitedPlace.findMany()
     * 
     * // Get first 10 VisitedPlaces
     * const visitedPlaces = await prisma.visitedPlace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitedPlaceWithIdOnly = await prisma.visitedPlace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitedPlaceFindManyArgs>(args?: SelectSubset<T, VisitedPlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitedPlace.
     * @param {VisitedPlaceCreateArgs} args - Arguments to create a VisitedPlace.
     * @example
     * // Create one VisitedPlace
     * const VisitedPlace = await prisma.visitedPlace.create({
     *   data: {
     *     // ... data to create a VisitedPlace
     *   }
     * })
     * 
     */
    create<T extends VisitedPlaceCreateArgs>(args: SelectSubset<T, VisitedPlaceCreateArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitedPlaces.
     * @param {VisitedPlaceCreateManyArgs} args - Arguments to create many VisitedPlaces.
     * @example
     * // Create many VisitedPlaces
     * const visitedPlace = await prisma.visitedPlace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitedPlaceCreateManyArgs>(args?: SelectSubset<T, VisitedPlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VisitedPlace.
     * @param {VisitedPlaceDeleteArgs} args - Arguments to delete one VisitedPlace.
     * @example
     * // Delete one VisitedPlace
     * const VisitedPlace = await prisma.visitedPlace.delete({
     *   where: {
     *     // ... filter to delete one VisitedPlace
     *   }
     * })
     * 
     */
    delete<T extends VisitedPlaceDeleteArgs>(args: SelectSubset<T, VisitedPlaceDeleteArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitedPlace.
     * @param {VisitedPlaceUpdateArgs} args - Arguments to update one VisitedPlace.
     * @example
     * // Update one VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitedPlaceUpdateArgs>(args: SelectSubset<T, VisitedPlaceUpdateArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitedPlaces.
     * @param {VisitedPlaceDeleteManyArgs} args - Arguments to filter VisitedPlaces to delete.
     * @example
     * // Delete a few VisitedPlaces
     * const { count } = await prisma.visitedPlace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitedPlaceDeleteManyArgs>(args?: SelectSubset<T, VisitedPlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitedPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitedPlaces
     * const visitedPlace = await prisma.visitedPlace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitedPlaceUpdateManyArgs>(args: SelectSubset<T, VisitedPlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisitedPlace.
     * @param {VisitedPlaceUpsertArgs} args - Arguments to update or create a VisitedPlace.
     * @example
     * // Update or create a VisitedPlace
     * const visitedPlace = await prisma.visitedPlace.upsert({
     *   create: {
     *     // ... data to create a VisitedPlace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitedPlace we want to update
     *   }
     * })
     */
    upsert<T extends VisitedPlaceUpsertArgs>(args: SelectSubset<T, VisitedPlaceUpsertArgs<ExtArgs>>): Prisma__VisitedPlaceClient<$Result.GetResult<Prisma.$VisitedPlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitedPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceCountArgs} args - Arguments to filter VisitedPlaces to count.
     * @example
     * // Count the number of VisitedPlaces
     * const count = await prisma.visitedPlace.count({
     *   where: {
     *     // ... the filter for the VisitedPlaces we want to count
     *   }
     * })
    **/
    count<T extends VisitedPlaceCountArgs>(
      args?: Subset<T, VisitedPlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitedPlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitedPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitedPlaceAggregateArgs>(args: Subset<T, VisitedPlaceAggregateArgs>): Prisma.PrismaPromise<GetVisitedPlaceAggregateType<T>>

    /**
     * Group by VisitedPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitedPlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitedPlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitedPlaceGroupByArgs['orderBy'] }
        : { orderBy?: VisitedPlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitedPlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitedPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitedPlace model
   */
  readonly fields: VisitedPlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitedPlace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitedPlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisitedPlace model
   */
  interface VisitedPlaceFieldRefs {
    readonly id: FieldRef<"VisitedPlace", 'Int'>
    readonly at: FieldRef<"VisitedPlace", 'DateTime'>
    readonly userId: FieldRef<"VisitedPlace", 'Int'>
    readonly placeId: FieldRef<"VisitedPlace", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VisitedPlace findUnique
   */
  export type VisitedPlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter, which VisitedPlace to fetch.
     */
    where: VisitedPlaceWhereUniqueInput
  }

  /**
   * VisitedPlace findUniqueOrThrow
   */
  export type VisitedPlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter, which VisitedPlace to fetch.
     */
    where: VisitedPlaceWhereUniqueInput
  }

  /**
   * VisitedPlace findFirst
   */
  export type VisitedPlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter, which VisitedPlace to fetch.
     */
    where?: VisitedPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitedPlaces to fetch.
     */
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitedPlaces.
     */
    cursor?: VisitedPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitedPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitedPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitedPlaces.
     */
    distinct?: VisitedPlaceScalarFieldEnum | VisitedPlaceScalarFieldEnum[]
  }

  /**
   * VisitedPlace findFirstOrThrow
   */
  export type VisitedPlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter, which VisitedPlace to fetch.
     */
    where?: VisitedPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitedPlaces to fetch.
     */
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitedPlaces.
     */
    cursor?: VisitedPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitedPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitedPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitedPlaces.
     */
    distinct?: VisitedPlaceScalarFieldEnum | VisitedPlaceScalarFieldEnum[]
  }

  /**
   * VisitedPlace findMany
   */
  export type VisitedPlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter, which VisitedPlaces to fetch.
     */
    where?: VisitedPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitedPlaces to fetch.
     */
    orderBy?: VisitedPlaceOrderByWithRelationInput | VisitedPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitedPlaces.
     */
    cursor?: VisitedPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitedPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitedPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitedPlaces.
     */
    distinct?: VisitedPlaceScalarFieldEnum | VisitedPlaceScalarFieldEnum[]
  }

  /**
   * VisitedPlace create
   */
  export type VisitedPlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitedPlace.
     */
    data: XOR<VisitedPlaceCreateInput, VisitedPlaceUncheckedCreateInput>
  }

  /**
   * VisitedPlace createMany
   */
  export type VisitedPlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitedPlaces.
     */
    data: VisitedPlaceCreateManyInput | VisitedPlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitedPlace update
   */
  export type VisitedPlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitedPlace.
     */
    data: XOR<VisitedPlaceUpdateInput, VisitedPlaceUncheckedUpdateInput>
    /**
     * Choose, which VisitedPlace to update.
     */
    where: VisitedPlaceWhereUniqueInput
  }

  /**
   * VisitedPlace updateMany
   */
  export type VisitedPlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitedPlaces.
     */
    data: XOR<VisitedPlaceUpdateManyMutationInput, VisitedPlaceUncheckedUpdateManyInput>
    /**
     * Filter which VisitedPlaces to update
     */
    where?: VisitedPlaceWhereInput
    /**
     * Limit how many VisitedPlaces to update.
     */
    limit?: number
  }

  /**
   * VisitedPlace upsert
   */
  export type VisitedPlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitedPlace to update in case it exists.
     */
    where: VisitedPlaceWhereUniqueInput
    /**
     * In case the VisitedPlace found by the `where` argument doesn't exist, create a new VisitedPlace with this data.
     */
    create: XOR<VisitedPlaceCreateInput, VisitedPlaceUncheckedCreateInput>
    /**
     * In case the VisitedPlace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitedPlaceUpdateInput, VisitedPlaceUncheckedUpdateInput>
  }

  /**
   * VisitedPlace delete
   */
  export type VisitedPlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
    /**
     * Filter which VisitedPlace to delete.
     */
    where: VisitedPlaceWhereUniqueInput
  }

  /**
   * VisitedPlace deleteMany
   */
  export type VisitedPlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitedPlaces to delete
     */
    where?: VisitedPlaceWhereInput
    /**
     * Limit how many VisitedPlaces to delete.
     */
    limit?: number
  }

  /**
   * VisitedPlace without action
   */
  export type VisitedPlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitedPlace
     */
    select?: VisitedPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitedPlace
     */
    omit?: VisitedPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitedPlaceInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ChatGroupSumAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    activityId: number
    _all: number
  }


  export type ChatGroupAvgAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ChatGroupSumAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ChatGroupMinAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    activityId?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _avg?: ChatGroupAvgAggregateInputType
    _sum?: ChatGroupSumAggregateInputType
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: number
    activityId: number
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>



  export type ChatGroupSelectScalar = {
    id?: boolean
    activityId?: boolean
  }

  export type ChatGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityId", ExtArgs["result"]["chatGroup"]>
  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activityId: number
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }

  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupFindUniqueArgs>(args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupFindFirstArgs>(args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupFindManyArgs>(args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
     */
    create<T extends ChatGroupCreateArgs>(args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupCreateManyArgs>(args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupDeleteArgs>(args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupUpdateArgs>(args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupDeleteManyArgs>(args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupUpdateManyArgs>(args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupUpsertArgs>(args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatGroup$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGroup model
   */
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'Int'>
    readonly activityId: FieldRef<"ChatGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }

  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }

  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroup.messages
   */
  export type ChatGroup$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    chatGroupId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    chatGroupId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    chatGroupId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    senderId: number | null
    chatGroupId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    senderId: number
    chatGroupId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    chatGroupId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    chatGroupId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    chatGroupId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    chatGroupId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    senderId?: true
    chatGroupId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    senderId: number
    chatGroupId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    chatGroupId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    senderId?: boolean
    chatGroupId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "senderId" | "chatGroupId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      senderId: number
      chatGroupId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly chatGroupId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    gender: 'gender',
    profileImg: 'profileImg',
    bio: 'bio',
    isVerified: 'isVerified',
    faceDescriptor: 'faceDescriptor',
    trustScore: 'trustScore',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    category: 'category',
    title: 'title',
    description: 'description',
    maxParticipants: 'maxParticipants',
    status: 'status',
    eventStartDate: 'eventStartDate',
    eventEndDate: 'eventEndDate',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    hostId: 'hostId',
    placeId: 'placeId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId',
    activityId: 'activityId'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    placeName: 'placeName',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    reviewerId: 'reviewerId',
    receiverId: 'receiverId',
    activityId: 'activityId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId',
    createdAt: 'createdAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteItemScalarFieldEnum: {
    id: 'id',
    order: 'order',
    routeId: 'routeId',
    placeId: 'placeId'
  };

  export type RouteItemScalarFieldEnum = (typeof RouteItemScalarFieldEnum)[keyof typeof RouteItemScalarFieldEnum]


  export const FriendShipScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type FriendShipScalarFieldEnum = (typeof FriendShipScalarFieldEnum)[keyof typeof FriendShipScalarFieldEnum]


  export const VisitedPlaceScalarFieldEnum: {
    id: 'id',
    at: 'at',
    userId: 'userId',
    placeId: 'placeId'
  };

  export type VisitedPlaceScalarFieldEnum = (typeof VisitedPlaceScalarFieldEnum)[keyof typeof VisitedPlaceScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    activityId: 'activityId'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    senderId: 'senderId',
    chatGroupId: 'chatGroupId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    profileImg: 'profileImg',
    bio: 'bio',
    faceDescriptor: 'faceDescriptor'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const PlaceOrderByRelevanceFieldEnum: {
    placeName: 'placeName',
    address: 'address'
  };

  export type PlaceOrderByRelevanceFieldEnum = (typeof PlaceOrderByRelevanceFieldEnum)[keyof typeof PlaceOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment',
    imageUrl: 'imageUrl'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const RouteOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RouteOrderByRelevanceFieldEnum = (typeof RouteOrderByRelevanceFieldEnum)[keyof typeof RouteOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'genderStatus'
   */
  export type EnumgenderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'genderStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ActivityCategory'
   */
  export type EnumActivityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityCategory'>
    


  /**
   * Reference to a field of type 'ActivityStatus'
   */
  export type EnumActivityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: EnumgenderStatusFilter<"User"> | $Enums.genderStatus
    profileImg?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    faceDescriptor?: StringNullableFilter<"User"> | string | null
    trustScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdActivities?: ActivityListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    visitedPlaces?: VisitedPlaceListRelationFilter
    messages?: MessageListRelationFilter
    createdRoutes?: RouteListRelationFilter
    sentFriendRequests?: FriendShipListRelationFilter
    receivedFriendRequests?: FriendShipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    profileImg?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    faceDescriptor?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    createdActivities?: ActivityOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    visitedPlaces?: VisitedPlaceOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    createdRoutes?: RouteOrderByRelationAggregateInput
    sentFriendRequests?: FriendShipOrderByRelationAggregateInput
    receivedFriendRequests?: FriendShipOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: EnumgenderStatusFilter<"User"> | $Enums.genderStatus
    profileImg?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    faceDescriptor?: StringNullableFilter<"User"> | string | null
    trustScore?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdActivities?: ActivityListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    visitedPlaces?: VisitedPlaceListRelationFilter
    messages?: MessageListRelationFilter
    createdRoutes?: RouteListRelationFilter
    sentFriendRequests?: FriendShipListRelationFilter
    receivedFriendRequests?: FriendShipListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    profileImg?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    faceDescriptor?: SortOrderInput | SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumgenderStatusWithAggregatesFilter<"User"> | $Enums.genderStatus
    profileImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    faceDescriptor?: StringNullableWithAggregatesFilter<"User"> | string | null
    trustScore?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    category?: EnumActivityCategoryFilter<"Activity"> | $Enums.ActivityCategory
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    maxParticipants?: IntFilter<"Activity"> | number
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    eventStartDate?: DateTimeFilter<"Activity"> | Date | string
    eventEndDate?: DateTimeFilter<"Activity"> | Date | string
    isPublic?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    hostId?: IntFilter<"Activity"> | number
    placeId?: IntNullableFilter<"Activity"> | number | null
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    place?: XOR<PlaceNullableScalarRelationFilter, PlaceWhereInput> | null
    joinRequests?: JoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
    chatGroup?: XOR<ChatGroupNullableScalarRelationFilter, ChatGroupWhereInput> | null
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    host?: UserOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    chatGroup?: ChatGroupOrderByWithRelationInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    category?: EnumActivityCategoryFilter<"Activity"> | $Enums.ActivityCategory
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    maxParticipants?: IntFilter<"Activity"> | number
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    eventStartDate?: DateTimeFilter<"Activity"> | Date | string
    eventEndDate?: DateTimeFilter<"Activity"> | Date | string
    isPublic?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    hostId?: IntFilter<"Activity"> | number
    placeId?: IntNullableFilter<"Activity"> | number | null
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    place?: XOR<PlaceNullableScalarRelationFilter, PlaceWhereInput> | null
    joinRequests?: JoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
    chatGroup?: XOR<ChatGroupNullableScalarRelationFilter, ChatGroupWhereInput> | null
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrderInput | SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    category?: EnumActivityCategoryWithAggregatesFilter<"Activity"> | $Enums.ActivityCategory
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    maxParticipants?: IntWithAggregatesFilter<"Activity"> | number
    status?: EnumActivityStatusWithAggregatesFilter<"Activity"> | $Enums.ActivityStatus
    eventStartDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    eventEndDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Activity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    hostId?: IntWithAggregatesFilter<"Activity"> | number
    placeId?: IntNullableWithAggregatesFilter<"Activity"> | number | null
  }

  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: IntFilter<"JoinRequest"> | number
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    userId?: IntFilter<"JoinRequest"> | number
    activityId?: IntFilter<"JoinRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    user?: UserOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_activityId?: JoinRequestUserIdActivityIdCompoundUniqueInput
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    userId?: IntFilter<"JoinRequest"> | number
    activityId?: IntFilter<"JoinRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id" | "userId_activityId">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _avg?: JoinRequestAvgOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
    _sum?: JoinRequestSumOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JoinRequest"> | number
    status?: EnumRequestStatusWithAggregatesFilter<"JoinRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
    userId?: IntWithAggregatesFilter<"JoinRequest"> | number
    activityId?: IntWithAggregatesFilter<"JoinRequest"> | number
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: IntFilter<"Place"> | number
    placeName?: StringFilter<"Place"> | string
    latitude?: FloatFilter<"Place"> | number
    longitude?: FloatFilter<"Place"> | number
    address?: StringNullableFilter<"Place"> | string | null
    visitedBy?: VisitedPlaceListRelationFilter
    activities?: ActivityListRelationFilter
    routeItems?: RouteItemListRelationFilter
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    visitedBy?: VisitedPlaceOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    routeItems?: RouteItemOrderByRelationAggregateInput
    _relevance?: PlaceOrderByRelevanceInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    placeName?: StringFilter<"Place"> | string
    latitude?: FloatFilter<"Place"> | number
    longitude?: FloatFilter<"Place"> | number
    address?: StringNullableFilter<"Place"> | string | null
    visitedBy?: VisitedPlaceListRelationFilter
    activities?: ActivityListRelationFilter
    routeItems?: RouteItemListRelationFilter
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Place"> | number
    placeName?: StringWithAggregatesFilter<"Place"> | string
    latitude?: FloatWithAggregatesFilter<"Place"> | number
    longitude?: FloatWithAggregatesFilter<"Place"> | number
    address?: StringNullableWithAggregatesFilter<"Place"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    imageUrl?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: IntFilter<"Review"> | number
    receiverId?: IntNullableFilter<"Review"> | number | null
    activityId?: IntFilter<"Review"> | number
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    activityId?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    imageUrl?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: IntFilter<"Review"> | number
    receiverId?: IntNullableFilter<"Review"> | number | null
    activityId?: IntFilter<"Review"> | number
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    activityId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    reviewerId?: IntWithAggregatesFilter<"Review"> | number
    receiverId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    activityId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    creatorId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RouteItemListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    items?: RouteItemOrderByRelationAggregateInput
    _relevance?: RouteOrderByRelevanceInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    creatorId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RouteItemListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    description?: StringNullableWithAggregatesFilter<"Route"> | string | null
    creatorId?: IntWithAggregatesFilter<"Route"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type RouteItemWhereInput = {
    AND?: RouteItemWhereInput | RouteItemWhereInput[]
    OR?: RouteItemWhereInput[]
    NOT?: RouteItemWhereInput | RouteItemWhereInput[]
    id?: IntFilter<"RouteItem"> | number
    order?: IntFilter<"RouteItem"> | number
    routeId?: IntFilter<"RouteItem"> | number
    placeId?: IntFilter<"RouteItem"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }

  export type RouteItemOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
    route?: RouteOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
  }

  export type RouteItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteItemWhereInput | RouteItemWhereInput[]
    OR?: RouteItemWhereInput[]
    NOT?: RouteItemWhereInput | RouteItemWhereInput[]
    order?: IntFilter<"RouteItem"> | number
    routeId?: IntFilter<"RouteItem"> | number
    placeId?: IntFilter<"RouteItem"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }, "id">

  export type RouteItemOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
    _count?: RouteItemCountOrderByAggregateInput
    _avg?: RouteItemAvgOrderByAggregateInput
    _max?: RouteItemMaxOrderByAggregateInput
    _min?: RouteItemMinOrderByAggregateInput
    _sum?: RouteItemSumOrderByAggregateInput
  }

  export type RouteItemScalarWhereWithAggregatesInput = {
    AND?: RouteItemScalarWhereWithAggregatesInput | RouteItemScalarWhereWithAggregatesInput[]
    OR?: RouteItemScalarWhereWithAggregatesInput[]
    NOT?: RouteItemScalarWhereWithAggregatesInput | RouteItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteItem"> | number
    order?: IntWithAggregatesFilter<"RouteItem"> | number
    routeId?: IntWithAggregatesFilter<"RouteItem"> | number
    placeId?: IntWithAggregatesFilter<"RouteItem"> | number
  }

  export type FriendShipWhereInput = {
    AND?: FriendShipWhereInput | FriendShipWhereInput[]
    OR?: FriendShipWhereInput[]
    NOT?: FriendShipWhereInput | FriendShipWhereInput[]
    id?: IntFilter<"FriendShip"> | number
    status?: EnumFriendshipStatusFilter<"FriendShip"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"FriendShip"> | Date | string
    senderId?: IntFilter<"FriendShip"> | number
    receiverId?: IntFilter<"FriendShip"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendShipOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type FriendShipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    senderId_receiverId?: FriendShipSenderIdReceiverIdCompoundUniqueInput
    AND?: FriendShipWhereInput | FriendShipWhereInput[]
    OR?: FriendShipWhereInput[]
    NOT?: FriendShipWhereInput | FriendShipWhereInput[]
    status?: EnumFriendshipStatusFilter<"FriendShip"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"FriendShip"> | Date | string
    senderId?: IntFilter<"FriendShip"> | number
    receiverId?: IntFilter<"FriendShip"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "senderId_receiverId">

  export type FriendShipOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: FriendShipCountOrderByAggregateInput
    _avg?: FriendShipAvgOrderByAggregateInput
    _max?: FriendShipMaxOrderByAggregateInput
    _min?: FriendShipMinOrderByAggregateInput
    _sum?: FriendShipSumOrderByAggregateInput
  }

  export type FriendShipScalarWhereWithAggregatesInput = {
    AND?: FriendShipScalarWhereWithAggregatesInput | FriendShipScalarWhereWithAggregatesInput[]
    OR?: FriendShipScalarWhereWithAggregatesInput[]
    NOT?: FriendShipScalarWhereWithAggregatesInput | FriendShipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FriendShip"> | number
    status?: EnumFriendshipStatusWithAggregatesFilter<"FriendShip"> | $Enums.FriendshipStatus
    createdAt?: DateTimeWithAggregatesFilter<"FriendShip"> | Date | string
    senderId?: IntWithAggregatesFilter<"FriendShip"> | number
    receiverId?: IntWithAggregatesFilter<"FriendShip"> | number
  }

  export type VisitedPlaceWhereInput = {
    AND?: VisitedPlaceWhereInput | VisitedPlaceWhereInput[]
    OR?: VisitedPlaceWhereInput[]
    NOT?: VisitedPlaceWhereInput | VisitedPlaceWhereInput[]
    id?: IntFilter<"VisitedPlace"> | number
    at?: DateTimeFilter<"VisitedPlace"> | Date | string
    userId?: IntFilter<"VisitedPlace"> | number
    placeId?: IntFilter<"VisitedPlace"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }

  export type VisitedPlaceOrderByWithRelationInput = {
    id?: SortOrder
    at?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
    user?: UserOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
  }

  export type VisitedPlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitedPlaceWhereInput | VisitedPlaceWhereInput[]
    OR?: VisitedPlaceWhereInput[]
    NOT?: VisitedPlaceWhereInput | VisitedPlaceWhereInput[]
    at?: DateTimeFilter<"VisitedPlace"> | Date | string
    userId?: IntFilter<"VisitedPlace"> | number
    placeId?: IntFilter<"VisitedPlace"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }, "id">

  export type VisitedPlaceOrderByWithAggregationInput = {
    id?: SortOrder
    at?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
    _count?: VisitedPlaceCountOrderByAggregateInput
    _avg?: VisitedPlaceAvgOrderByAggregateInput
    _max?: VisitedPlaceMaxOrderByAggregateInput
    _min?: VisitedPlaceMinOrderByAggregateInput
    _sum?: VisitedPlaceSumOrderByAggregateInput
  }

  export type VisitedPlaceScalarWhereWithAggregatesInput = {
    AND?: VisitedPlaceScalarWhereWithAggregatesInput | VisitedPlaceScalarWhereWithAggregatesInput[]
    OR?: VisitedPlaceScalarWhereWithAggregatesInput[]
    NOT?: VisitedPlaceScalarWhereWithAggregatesInput | VisitedPlaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitedPlace"> | number
    at?: DateTimeWithAggregatesFilter<"VisitedPlace"> | Date | string
    userId?: IntWithAggregatesFilter<"VisitedPlace"> | number
    placeId?: IntWithAggregatesFilter<"VisitedPlace"> | number
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: IntFilter<"ChatGroup"> | number
    activityId?: IntFilter<"ChatGroup"> | number
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    activityId?: SortOrder
    activity?: ActivityOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    activityId?: number
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "activityId">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    activityId?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _avg?: ChatGroupAvgOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
    _sum?: ChatGroupSumOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroup"> | number
    activityId?: IntWithAggregatesFilter<"ChatGroup"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    chatGroupId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    sender?: UserOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    chatGroupId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
    chatGroupId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutCreatedActivitiesInput
    place?: PlaceCreateNestedOneWithoutActivitiesInput
    joinRequests?: JoinRequestCreateNestedManyWithoutActivityInput
    reviews?: ReviewCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    placeId?: number | null
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutActivityInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupUncheckedCreateNestedOneWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput
    place?: PlaceUpdateOneWithoutActivitiesNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUncheckedUpdateOneWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    placeId?: number | null
  }

  export type ActivityUpdateManyMutationInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinRequestCreateInput = {
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJoinRequestsInput
    activity: ActivityCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: number
    activityId: number
  }

  export type JoinRequestUpdateInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
    activity?: ActivityUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type JoinRequestCreateManyInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: number
    activityId: number
  }

  export type JoinRequestUpdateManyMutationInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaceCreateInput = {
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceCreateNestedManyWithoutPlaceInput
    activities?: ActivityCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: number
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceUncheckedCreateNestedManyWithoutPlaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUpdateManyWithoutPlaceNestedInput
    activities?: ActivityUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUncheckedUpdateManyWithoutPlaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: number
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
  }

  export type PlaceUpdateManyMutationInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    receiver?: UserCreateNestedOneWithoutReviewsReceivedInput
    activity: ActivityCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    receiverId?: number | null
    activityId: number
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    receiver?: UserUpdateOneWithoutReviewsReceivedNestedInput
    activity?: ActivityUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    receiverId?: number | null
    activityId: number
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedRoutesInput
    items?: RouteItemCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    creatorId: number
    createdAt?: Date | string
    items?: RouteItemUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedRoutesNestedInput
    items?: RouteItemUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RouteItemUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    creatorId: number
    createdAt?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteItemCreateInput = {
    order: number
    route: RouteCreateNestedOneWithoutItemsInput
    place: PlaceCreateNestedOneWithoutRouteItemsInput
  }

  export type RouteItemUncheckedCreateInput = {
    id?: number
    order: number
    routeId: number
    placeId: number
  }

  export type RouteItemUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutItemsNestedInput
    place?: PlaceUpdateOneRequiredWithoutRouteItemsNestedInput
  }

  export type RouteItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemCreateManyInput = {
    id?: number
    order: number
    routeId: number
    placeId: number
  }

  export type RouteItemUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipCreateInput = {
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentFriendRequestsInput
    receiver: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendShipUncheckedCreateInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    senderId: number
    receiverId: number
  }

  export type FriendShipUpdateInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendShipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipCreateManyInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    senderId: number
    receiverId: number
  }

  export type FriendShipUpdateManyMutationInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendShipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitedPlaceCreateInput = {
    at?: Date | string
    user: UserCreateNestedOneWithoutVisitedPlacesInput
    place: PlaceCreateNestedOneWithoutVisitedByInput
  }

  export type VisitedPlaceUncheckedCreateInput = {
    id?: number
    at?: Date | string
    userId: number
    placeId: number
  }

  export type VisitedPlaceUpdateInput = {
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitedPlacesNestedInput
    place?: PlaceUpdateOneRequiredWithoutVisitedByNestedInput
  }

  export type VisitedPlaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitedPlaceCreateManyInput = {
    id?: number
    at?: Date | string
    userId: number
    placeId: number
  }

  export type VisitedPlaceUpdateManyMutationInput = {
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitedPlaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatGroupCreateInput = {
    activity: ActivityCreateNestedOneWithoutChatGroupInput
    messages?: MessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: number
    activityId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUpdateInput = {
    activity?: ActivityUpdateOneRequiredWithoutChatGroupNestedInput
    messages?: MessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id?: number
    activityId: number
  }

  export type ChatGroupUpdateManyMutationInput = {

  }

  export type ChatGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    chatGroupId: number
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
    chatGroupId: number
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumgenderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.genderStatus[]
    notIn?: $Enums.genderStatus[]
    not?: NestedEnumgenderStatusFilter<$PrismaModel> | $Enums.genderStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type JoinRequestListRelationFilter = {
    every?: JoinRequestWhereInput
    some?: JoinRequestWhereInput
    none?: JoinRequestWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type VisitedPlaceListRelationFilter = {
    every?: VisitedPlaceWhereInput
    some?: VisitedPlaceWhereInput
    none?: VisitedPlaceWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type FriendShipListRelationFilter = {
    every?: FriendShipWhereInput
    some?: FriendShipWhereInput
    none?: FriendShipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitedPlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendShipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    profileImg?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    faceDescriptor?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    trustScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    profileImg?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    faceDescriptor?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    profileImg?: SortOrder
    bio?: SortOrder
    isVerified?: SortOrder
    faceDescriptor?: SortOrder
    trustScore?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    trustScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumgenderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.genderStatus[]
    notIn?: $Enums.genderStatus[]
    not?: NestedEnumgenderStatusWithAggregatesFilter<$PrismaModel> | $Enums.genderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderStatusFilter<$PrismaModel>
    _max?: NestedEnumgenderStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumActivityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityCategory | EnumActivityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityCategory[]
    notIn?: $Enums.ActivityCategory[]
    not?: NestedEnumActivityCategoryFilter<$PrismaModel> | $Enums.ActivityCategory
  }

  export type EnumActivityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[]
    notIn?: $Enums.ActivityStatus[]
    not?: NestedEnumActivityStatusFilter<$PrismaModel> | $Enums.ActivityStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaceNullableScalarRelationFilter = {
    is?: PlaceWhereInput | null
    isNot?: PlaceWhereInput | null
  }

  export type ChatGroupNullableScalarRelationFilter = {
    is?: ChatGroupWhereInput | null
    isNot?: ChatGroupWhereInput | null
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    maxParticipants?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    maxParticipants?: SortOrder
    hostId?: SortOrder
    placeId?: SortOrder
  }

  export type EnumActivityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityCategory | EnumActivityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityCategory[]
    notIn?: $Enums.ActivityCategory[]
    not?: NestedEnumActivityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ActivityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityCategoryFilter<$PrismaModel>
    _max?: NestedEnumActivityCategoryFilter<$PrismaModel>
  }

  export type EnumActivityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[]
    notIn?: $Enums.ActivityStatus[]
    not?: NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActivityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityStatusFilter<$PrismaModel>
    _max?: NestedEnumActivityStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type JoinRequestUserIdActivityIdCompoundUniqueInput = {
    userId: number
    activityId: number
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
  }

  export type JoinRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
  }

  export type JoinRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RouteItemListRelationFilter = {
    every?: RouteItemWhereInput
    some?: RouteItemWhereInput
    none?: RouteItemWhereInput
  }

  export type RouteItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceOrderByRelevanceInput = {
    fields: PlaceOrderByRelevanceFieldEnum | PlaceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    activityId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    activityId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    activityId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    activityId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    activityId?: SortOrder
  }

  export type RouteOrderByRelevanceInput = {
    fields: RouteOrderByRelevanceFieldEnum | RouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type PlaceScalarRelationFilter = {
    is?: PlaceWhereInput
    isNot?: PlaceWhereInput
  }

  export type RouteItemCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
  }

  export type RouteItemAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
  }

  export type RouteItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
  }

  export type RouteItemMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
  }

  export type RouteItemSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    routeId?: SortOrder
    placeId?: SortOrder
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type FriendShipSenderIdReceiverIdCompoundUniqueInput = {
    senderId: number
    receiverId: number
  }

  export type FriendShipCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type FriendShipAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type FriendShipMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type FriendShipMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type FriendShipSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type VisitedPlaceCountOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
  }

  export type VisitedPlaceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
  }

  export type VisitedPlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
  }

  export type VisitedPlaceMinOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
  }

  export type VisitedPlaceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    placeId?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ChatGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ChatGroupSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ChatGroupScalarRelationFilter = {
    is?: ChatGroupWhereInput
    isNot?: ChatGroupWhereInput
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ActivityCreateNestedManyWithoutHostInput = {
    create?: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput> | ActivityCreateWithoutHostInput[] | ActivityUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutHostInput | ActivityCreateOrConnectWithoutHostInput[]
    createMany?: ActivityCreateManyHostInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VisitedPlaceCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput> | VisitedPlaceCreateWithoutUserInput[] | VisitedPlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutUserInput | VisitedPlaceCreateOrConnectWithoutUserInput[]
    createMany?: VisitedPlaceCreateManyUserInputEnvelope
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput> | RouteCreateWithoutCreatorInput[] | RouteUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCreatorInput | RouteCreateOrConnectWithoutCreatorInput[]
    createMany?: RouteCreateManyCreatorInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FriendShipCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput> | FriendShipCreateWithoutSenderInput[] | FriendShipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutSenderInput | FriendShipCreateOrConnectWithoutSenderInput[]
    createMany?: FriendShipCreateManySenderInputEnvelope
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
  }

  export type FriendShipCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput> | FriendShipCreateWithoutReceiverInput[] | FriendShipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutReceiverInput | FriendShipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendShipCreateManyReceiverInputEnvelope
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput> | ActivityCreateWithoutHostInput[] | ActivityUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutHostInput | ActivityCreateOrConnectWithoutHostInput[]
    createMany?: ActivityCreateManyHostInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VisitedPlaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput> | VisitedPlaceCreateWithoutUserInput[] | VisitedPlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutUserInput | VisitedPlaceCreateOrConnectWithoutUserInput[]
    createMany?: VisitedPlaceCreateManyUserInputEnvelope
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput> | RouteCreateWithoutCreatorInput[] | RouteUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCreatorInput | RouteCreateOrConnectWithoutCreatorInput[]
    createMany?: RouteCreateManyCreatorInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type FriendShipUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput> | FriendShipCreateWithoutSenderInput[] | FriendShipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutSenderInput | FriendShipCreateOrConnectWithoutSenderInput[]
    createMany?: FriendShipCreateManySenderInputEnvelope
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
  }

  export type FriendShipUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput> | FriendShipCreateWithoutReceiverInput[] | FriendShipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutReceiverInput | FriendShipCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendShipCreateManyReceiverInputEnvelope
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumgenderStatusFieldUpdateOperationsInput = {
    set?: $Enums.genderStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ActivityUpdateManyWithoutHostNestedInput = {
    create?: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput> | ActivityCreateWithoutHostInput[] | ActivityUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutHostInput | ActivityCreateOrConnectWithoutHostInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutHostInput | ActivityUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ActivityCreateManyHostInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutHostInput | ActivityUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutHostInput | ActivityUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VisitedPlaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput> | VisitedPlaceCreateWithoutUserInput[] | VisitedPlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutUserInput | VisitedPlaceCreateOrConnectWithoutUserInput[]
    upsert?: VisitedPlaceUpsertWithWhereUniqueWithoutUserInput | VisitedPlaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitedPlaceCreateManyUserInputEnvelope
    set?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    disconnect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    delete?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    update?: VisitedPlaceUpdateWithWhereUniqueWithoutUserInput | VisitedPlaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitedPlaceUpdateManyWithWhereWithoutUserInput | VisitedPlaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput> | RouteCreateWithoutCreatorInput[] | RouteUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCreatorInput | RouteCreateOrConnectWithoutCreatorInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutCreatorInput | RouteUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RouteCreateManyCreatorInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutCreatorInput | RouteUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutCreatorInput | RouteUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FriendShipUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput> | FriendShipCreateWithoutSenderInput[] | FriendShipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutSenderInput | FriendShipCreateOrConnectWithoutSenderInput[]
    upsert?: FriendShipUpsertWithWhereUniqueWithoutSenderInput | FriendShipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendShipCreateManySenderInputEnvelope
    set?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    disconnect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    delete?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    update?: FriendShipUpdateWithWhereUniqueWithoutSenderInput | FriendShipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendShipUpdateManyWithWhereWithoutSenderInput | FriendShipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
  }

  export type FriendShipUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput> | FriendShipCreateWithoutReceiverInput[] | FriendShipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutReceiverInput | FriendShipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendShipUpsertWithWhereUniqueWithoutReceiverInput | FriendShipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendShipCreateManyReceiverInputEnvelope
    set?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    disconnect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    delete?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    update?: FriendShipUpdateWithWhereUniqueWithoutReceiverInput | FriendShipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendShipUpdateManyWithWhereWithoutReceiverInput | FriendShipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput> | ActivityCreateWithoutHostInput[] | ActivityUncheckedCreateWithoutHostInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutHostInput | ActivityCreateOrConnectWithoutHostInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutHostInput | ActivityUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: ActivityCreateManyHostInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutHostInput | ActivityUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutHostInput | ActivityUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput> | VisitedPlaceCreateWithoutUserInput[] | VisitedPlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutUserInput | VisitedPlaceCreateOrConnectWithoutUserInput[]
    upsert?: VisitedPlaceUpsertWithWhereUniqueWithoutUserInput | VisitedPlaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitedPlaceCreateManyUserInputEnvelope
    set?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    disconnect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    delete?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    update?: VisitedPlaceUpdateWithWhereUniqueWithoutUserInput | VisitedPlaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitedPlaceUpdateManyWithWhereWithoutUserInput | VisitedPlaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput> | RouteCreateWithoutCreatorInput[] | RouteUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutCreatorInput | RouteCreateOrConnectWithoutCreatorInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutCreatorInput | RouteUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RouteCreateManyCreatorInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutCreatorInput | RouteUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutCreatorInput | RouteUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type FriendShipUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput> | FriendShipCreateWithoutSenderInput[] | FriendShipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutSenderInput | FriendShipCreateOrConnectWithoutSenderInput[]
    upsert?: FriendShipUpsertWithWhereUniqueWithoutSenderInput | FriendShipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendShipCreateManySenderInputEnvelope
    set?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    disconnect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    delete?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    update?: FriendShipUpdateWithWhereUniqueWithoutSenderInput | FriendShipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendShipUpdateManyWithWhereWithoutSenderInput | FriendShipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
  }

  export type FriendShipUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput> | FriendShipCreateWithoutReceiverInput[] | FriendShipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendShipCreateOrConnectWithoutReceiverInput | FriendShipCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendShipUpsertWithWhereUniqueWithoutReceiverInput | FriendShipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendShipCreateManyReceiverInputEnvelope
    set?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    disconnect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    delete?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    connect?: FriendShipWhereUniqueInput | FriendShipWhereUniqueInput[]
    update?: FriendShipUpdateWithWhereUniqueWithoutReceiverInput | FriendShipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendShipUpdateManyWithWhereWithoutReceiverInput | FriendShipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedActivitiesInput = {
    create?: XOR<UserCreateWithoutCreatedActivitiesInput, UserUncheckedCreateWithoutCreatedActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<PlaceCreateWithoutActivitiesInput, PlaceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutActivitiesInput
    connect?: PlaceWhereUniqueInput
  }

  export type JoinRequestCreateNestedManyWithoutActivityInput = {
    create?: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput> | JoinRequestCreateWithoutActivityInput[] | JoinRequestUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutActivityInput | JoinRequestCreateOrConnectWithoutActivityInput[]
    createMany?: JoinRequestCreateManyActivityInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutActivityInput = {
    create?: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput> | ReviewCreateWithoutActivityInput[] | ReviewUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutActivityInput | ReviewCreateOrConnectWithoutActivityInput[]
    createMany?: ReviewCreateManyActivityInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ChatGroupCreateNestedOneWithoutActivityInput = {
    create?: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutActivityInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput> | JoinRequestCreateWithoutActivityInput[] | JoinRequestUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutActivityInput | JoinRequestCreateOrConnectWithoutActivityInput[]
    createMany?: JoinRequestCreateManyActivityInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput> | ReviewCreateWithoutActivityInput[] | ReviewUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutActivityInput | ReviewCreateOrConnectWithoutActivityInput[]
    createMany?: ReviewCreateManyActivityInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedOneWithoutActivityInput = {
    create?: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutActivityInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type EnumActivityCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ActivityCategory
  }

  export type EnumActivityStatusFieldUpdateOperationsInput = {
    set?: $Enums.ActivityStatus
  }

  export type UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedActivitiesInput, UserUncheckedCreateWithoutCreatedActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedActivitiesInput
    upsert?: UserUpsertWithoutCreatedActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedActivitiesInput, UserUpdateWithoutCreatedActivitiesInput>, UserUncheckedUpdateWithoutCreatedActivitiesInput>
  }

  export type PlaceUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<PlaceCreateWithoutActivitiesInput, PlaceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutActivitiesInput
    upsert?: PlaceUpsertWithoutActivitiesInput
    disconnect?: PlaceWhereInput | boolean
    delete?: PlaceWhereInput | boolean
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutActivitiesInput, PlaceUpdateWithoutActivitiesInput>, PlaceUncheckedUpdateWithoutActivitiesInput>
  }

  export type JoinRequestUpdateManyWithoutActivityNestedInput = {
    create?: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput> | JoinRequestCreateWithoutActivityInput[] | JoinRequestUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutActivityInput | JoinRequestCreateOrConnectWithoutActivityInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutActivityInput | JoinRequestUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: JoinRequestCreateManyActivityInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutActivityInput | JoinRequestUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutActivityInput | JoinRequestUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput> | ReviewCreateWithoutActivityInput[] | ReviewUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutActivityInput | ReviewCreateOrConnectWithoutActivityInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutActivityInput | ReviewUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ReviewCreateManyActivityInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutActivityInput | ReviewUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutActivityInput | ReviewUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ChatGroupUpdateOneWithoutActivityNestedInput = {
    create?: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutActivityInput
    upsert?: ChatGroupUpsertWithoutActivityInput
    disconnect?: ChatGroupWhereInput | boolean
    delete?: ChatGroupWhereInput | boolean
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutActivityInput, ChatGroupUpdateWithoutActivityInput>, ChatGroupUncheckedUpdateWithoutActivityInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JoinRequestUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput> | JoinRequestCreateWithoutActivityInput[] | JoinRequestUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutActivityInput | JoinRequestCreateOrConnectWithoutActivityInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutActivityInput | JoinRequestUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: JoinRequestCreateManyActivityInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutActivityInput | JoinRequestUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutActivityInput | JoinRequestUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput> | ReviewCreateWithoutActivityInput[] | ReviewUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutActivityInput | ReviewCreateOrConnectWithoutActivityInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutActivityInput | ReviewUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ReviewCreateManyActivityInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutActivityInput | ReviewUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutActivityInput | ReviewUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ChatGroupUncheckedUpdateOneWithoutActivityNestedInput = {
    create?: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutActivityInput
    upsert?: ChatGroupUpsertWithoutActivityInput
    disconnect?: ChatGroupWhereInput | boolean
    delete?: ChatGroupWhereInput | boolean
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutActivityInput, ChatGroupUpdateWithoutActivityInput>, ChatGroupUncheckedUpdateWithoutActivityInput>
  }

  export type UserCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<ActivityCreateWithoutJoinRequestsInput, ActivityUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutJoinRequestsInput
    connect?: ActivityWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    upsert?: UserUpsertWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinRequestsInput, UserUpdateWithoutJoinRequestsInput>, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type ActivityUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<ActivityCreateWithoutJoinRequestsInput, ActivityUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutJoinRequestsInput
    upsert?: ActivityUpsertWithoutJoinRequestsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutJoinRequestsInput, ActivityUpdateWithoutJoinRequestsInput>, ActivityUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type VisitedPlaceCreateNestedManyWithoutPlaceInput = {
    create?: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput> | VisitedPlaceCreateWithoutPlaceInput[] | VisitedPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutPlaceInput | VisitedPlaceCreateOrConnectWithoutPlaceInput[]
    createMany?: VisitedPlaceCreateManyPlaceInputEnvelope
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput> | ActivityCreateWithoutPlaceInput[] | ActivityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPlaceInput | ActivityCreateOrConnectWithoutPlaceInput[]
    createMany?: ActivityCreateManyPlaceInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type RouteItemCreateNestedManyWithoutPlaceInput = {
    create?: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput> | RouteItemCreateWithoutPlaceInput[] | RouteItemUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutPlaceInput | RouteItemCreateOrConnectWithoutPlaceInput[]
    createMany?: RouteItemCreateManyPlaceInputEnvelope
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
  }

  export type VisitedPlaceUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput> | VisitedPlaceCreateWithoutPlaceInput[] | VisitedPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutPlaceInput | VisitedPlaceCreateOrConnectWithoutPlaceInput[]
    createMany?: VisitedPlaceCreateManyPlaceInputEnvelope
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput> | ActivityCreateWithoutPlaceInput[] | ActivityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPlaceInput | ActivityCreateOrConnectWithoutPlaceInput[]
    createMany?: ActivityCreateManyPlaceInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type RouteItemUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput> | RouteItemCreateWithoutPlaceInput[] | RouteItemUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutPlaceInput | RouteItemCreateOrConnectWithoutPlaceInput[]
    createMany?: RouteItemCreateManyPlaceInputEnvelope
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VisitedPlaceUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput> | VisitedPlaceCreateWithoutPlaceInput[] | VisitedPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutPlaceInput | VisitedPlaceCreateOrConnectWithoutPlaceInput[]
    upsert?: VisitedPlaceUpsertWithWhereUniqueWithoutPlaceInput | VisitedPlaceUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: VisitedPlaceCreateManyPlaceInputEnvelope
    set?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    disconnect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    delete?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    update?: VisitedPlaceUpdateWithWhereUniqueWithoutPlaceInput | VisitedPlaceUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: VisitedPlaceUpdateManyWithWhereWithoutPlaceInput | VisitedPlaceUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput> | ActivityCreateWithoutPlaceInput[] | ActivityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPlaceInput | ActivityCreateOrConnectWithoutPlaceInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPlaceInput | ActivityUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ActivityCreateManyPlaceInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPlaceInput | ActivityUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPlaceInput | ActivityUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type RouteItemUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput> | RouteItemCreateWithoutPlaceInput[] | RouteItemUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutPlaceInput | RouteItemCreateOrConnectWithoutPlaceInput[]
    upsert?: RouteItemUpsertWithWhereUniqueWithoutPlaceInput | RouteItemUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: RouteItemCreateManyPlaceInputEnvelope
    set?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    disconnect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    delete?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    update?: RouteItemUpdateWithWhereUniqueWithoutPlaceInput | RouteItemUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: RouteItemUpdateManyWithWhereWithoutPlaceInput | RouteItemUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
  }

  export type VisitedPlaceUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput> | VisitedPlaceCreateWithoutPlaceInput[] | VisitedPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: VisitedPlaceCreateOrConnectWithoutPlaceInput | VisitedPlaceCreateOrConnectWithoutPlaceInput[]
    upsert?: VisitedPlaceUpsertWithWhereUniqueWithoutPlaceInput | VisitedPlaceUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: VisitedPlaceCreateManyPlaceInputEnvelope
    set?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    disconnect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    delete?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    connect?: VisitedPlaceWhereUniqueInput | VisitedPlaceWhereUniqueInput[]
    update?: VisitedPlaceUpdateWithWhereUniqueWithoutPlaceInput | VisitedPlaceUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: VisitedPlaceUpdateManyWithWhereWithoutPlaceInput | VisitedPlaceUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput> | ActivityCreateWithoutPlaceInput[] | ActivityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPlaceInput | ActivityCreateOrConnectWithoutPlaceInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPlaceInput | ActivityUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ActivityCreateManyPlaceInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPlaceInput | ActivityUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPlaceInput | ActivityUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type RouteItemUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput> | RouteItemCreateWithoutPlaceInput[] | RouteItemUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutPlaceInput | RouteItemCreateOrConnectWithoutPlaceInput[]
    upsert?: RouteItemUpsertWithWhereUniqueWithoutPlaceInput | RouteItemUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: RouteItemCreateManyPlaceInputEnvelope
    set?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    disconnect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    delete?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    update?: RouteItemUpdateWithWhereUniqueWithoutPlaceInput | RouteItemUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: RouteItemUpdateManyWithWhereWithoutPlaceInput | RouteItemUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ActivityCreateWithoutReviewsInput, ActivityUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutReviewsInput
    connect?: ActivityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateOneWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type ActivityUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ActivityCreateWithoutReviewsInput, ActivityUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutReviewsInput
    upsert?: ActivityUpsertWithoutReviewsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutReviewsInput, ActivityUpdateWithoutReviewsInput>, ActivityUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutCreatedRoutesInput = {
    create?: XOR<UserCreateWithoutCreatedRoutesInput, UserUncheckedCreateWithoutCreatedRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoutesInput
    connect?: UserWhereUniqueInput
  }

  export type RouteItemCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput> | RouteItemCreateWithoutRouteInput[] | RouteItemUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutRouteInput | RouteItemCreateOrConnectWithoutRouteInput[]
    createMany?: RouteItemCreateManyRouteInputEnvelope
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
  }

  export type RouteItemUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput> | RouteItemCreateWithoutRouteInput[] | RouteItemUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutRouteInput | RouteItemCreateOrConnectWithoutRouteInput[]
    createMany?: RouteItemCreateManyRouteInputEnvelope
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRoutesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRoutesInput, UserUncheckedCreateWithoutCreatedRoutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoutesInput
    upsert?: UserUpsertWithoutCreatedRoutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRoutesInput, UserUpdateWithoutCreatedRoutesInput>, UserUncheckedUpdateWithoutCreatedRoutesInput>
  }

  export type RouteItemUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput> | RouteItemCreateWithoutRouteInput[] | RouteItemUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutRouteInput | RouteItemCreateOrConnectWithoutRouteInput[]
    upsert?: RouteItemUpsertWithWhereUniqueWithoutRouteInput | RouteItemUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteItemCreateManyRouteInputEnvelope
    set?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    disconnect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    delete?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    update?: RouteItemUpdateWithWhereUniqueWithoutRouteInput | RouteItemUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteItemUpdateManyWithWhereWithoutRouteInput | RouteItemUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
  }

  export type RouteItemUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput> | RouteItemCreateWithoutRouteInput[] | RouteItemUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteItemCreateOrConnectWithoutRouteInput | RouteItemCreateOrConnectWithoutRouteInput[]
    upsert?: RouteItemUpsertWithWhereUniqueWithoutRouteInput | RouteItemUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteItemCreateManyRouteInputEnvelope
    set?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    disconnect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    delete?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    connect?: RouteItemWhereUniqueInput | RouteItemWhereUniqueInput[]
    update?: RouteItemUpdateWithWhereUniqueWithoutRouteInput | RouteItemUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteItemUpdateManyWithWhereWithoutRouteInput | RouteItemUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutItemsInput = {
    create?: XOR<RouteCreateWithoutItemsInput, RouteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutItemsInput
    connect?: RouteWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutRouteItemsInput = {
    create?: XOR<PlaceCreateWithoutRouteItemsInput, PlaceUncheckedCreateWithoutRouteItemsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutRouteItemsInput
    connect?: PlaceWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RouteCreateWithoutItemsInput, RouteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutItemsInput
    upsert?: RouteUpsertWithoutItemsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutItemsInput, RouteUpdateWithoutItemsInput>, RouteUncheckedUpdateWithoutItemsInput>
  }

  export type PlaceUpdateOneRequiredWithoutRouteItemsNestedInput = {
    create?: XOR<PlaceCreateWithoutRouteItemsInput, PlaceUncheckedCreateWithoutRouteItemsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutRouteItemsInput
    upsert?: PlaceUpsertWithoutRouteItemsInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutRouteItemsInput, PlaceUpdateWithoutRouteItemsInput>, PlaceUncheckedUpdateWithoutRouteItemsInput>
  }

  export type UserCreateNestedOneWithoutSentFriendRequestsInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    upsert?: UserUpsertWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendRequestsInput, UserUpdateWithoutSentFriendRequestsInput>, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    upsert?: UserUpsertWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput, UserUpdateWithoutReceivedFriendRequestsInput>, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserCreateNestedOneWithoutVisitedPlacesInput = {
    create?: XOR<UserCreateWithoutVisitedPlacesInput, UserUncheckedCreateWithoutVisitedPlacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitedPlacesInput
    connect?: UserWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutVisitedByInput = {
    create?: XOR<PlaceCreateWithoutVisitedByInput, PlaceUncheckedCreateWithoutVisitedByInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutVisitedByInput
    connect?: PlaceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVisitedPlacesNestedInput = {
    create?: XOR<UserCreateWithoutVisitedPlacesInput, UserUncheckedCreateWithoutVisitedPlacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitedPlacesInput
    upsert?: UserUpsertWithoutVisitedPlacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitedPlacesInput, UserUpdateWithoutVisitedPlacesInput>, UserUncheckedUpdateWithoutVisitedPlacesInput>
  }

  export type PlaceUpdateOneRequiredWithoutVisitedByNestedInput = {
    create?: XOR<PlaceCreateWithoutVisitedByInput, PlaceUncheckedCreateWithoutVisitedByInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutVisitedByInput
    upsert?: PlaceUpsertWithoutVisitedByInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutVisitedByInput, PlaceUpdateWithoutVisitedByInput>, PlaceUncheckedUpdateWithoutVisitedByInput>
  }

  export type ActivityCreateNestedOneWithoutChatGroupInput = {
    create?: XOR<ActivityCreateWithoutChatGroupInput, ActivityUncheckedCreateWithoutChatGroupInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutChatGroupInput
    connect?: ActivityWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput> | MessageCreateWithoutChatGroupInput[] | MessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatGroupInput | MessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: MessageCreateManyChatGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput> | MessageCreateWithoutChatGroupInput[] | MessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatGroupInput | MessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: MessageCreateManyChatGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ActivityUpdateOneRequiredWithoutChatGroupNestedInput = {
    create?: XOR<ActivityCreateWithoutChatGroupInput, ActivityUncheckedCreateWithoutChatGroupInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutChatGroupInput
    upsert?: ActivityUpsertWithoutChatGroupInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutChatGroupInput, ActivityUpdateWithoutChatGroupInput>, ActivityUncheckedUpdateWithoutChatGroupInput>
  }

  export type MessageUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput> | MessageCreateWithoutChatGroupInput[] | MessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatGroupInput | MessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatGroupInput | MessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: MessageCreateManyChatGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatGroupInput | MessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatGroupInput | MessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput> | MessageCreateWithoutChatGroupInput[] | MessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatGroupInput | MessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatGroupInput | MessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: MessageCreateManyChatGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatGroupInput | MessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatGroupInput | MessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    upsert?: ChatGroupUpsertWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMessagesInput, ChatGroupUpdateWithoutMessagesInput>, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumgenderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.genderStatus[]
    notIn?: $Enums.genderStatus[]
    not?: NestedEnumgenderStatusFilter<$PrismaModel> | $Enums.genderStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumgenderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.genderStatus[]
    notIn?: $Enums.genderStatus[]
    not?: NestedEnumgenderStatusWithAggregatesFilter<$PrismaModel> | $Enums.genderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderStatusFilter<$PrismaModel>
    _max?: NestedEnumgenderStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumActivityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityCategory | EnumActivityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityCategory[]
    notIn?: $Enums.ActivityCategory[]
    not?: NestedEnumActivityCategoryFilter<$PrismaModel> | $Enums.ActivityCategory
  }

  export type NestedEnumActivityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[]
    notIn?: $Enums.ActivityStatus[]
    not?: NestedEnumActivityStatusFilter<$PrismaModel> | $Enums.ActivityStatus
  }

  export type NestedEnumActivityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityCategory | EnumActivityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityCategory[]
    notIn?: $Enums.ActivityCategory[]
    not?: NestedEnumActivityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ActivityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityCategoryFilter<$PrismaModel>
    _max?: NestedEnumActivityCategoryFilter<$PrismaModel>
  }

  export type NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[]
    notIn?: $Enums.ActivityStatus[]
    not?: NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActivityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityStatusFilter<$PrismaModel>
    _max?: NestedEnumActivityStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[]
    notIn?: $Enums.FriendshipStatus[]
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type ActivityCreateWithoutHostInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    place?: PlaceCreateNestedOneWithoutActivitiesInput
    joinRequests?: JoinRequestCreateNestedManyWithoutActivityInput
    reviews?: ReviewCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutHostInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    placeId?: number | null
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutActivityInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupUncheckedCreateNestedOneWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutHostInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput>
  }

  export type ActivityCreateManyHostInputEnvelope = {
    data: ActivityCreateManyHostInput | ActivityCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type JoinRequestCreateWithoutUserInput = {
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    activity: ActivityCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    activityId: number
  }

  export type JoinRequestCreateOrConnectWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestCreateManyUserInputEnvelope = {
    data: JoinRequestCreateManyUserInput | JoinRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    receiver?: UserCreateNestedOneWithoutReviewsReceivedInput
    activity: ActivityCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    receiverId?: number | null
    activityId: number
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReceiverInput = {
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    activity: ActivityCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReceiverInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    activityId: number
  }

  export type ReviewCreateOrConnectWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewCreateManyReceiverInputEnvelope = {
    data: ReviewCreateManyReceiverInput | ReviewCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type VisitedPlaceCreateWithoutUserInput = {
    at?: Date | string
    place: PlaceCreateNestedOneWithoutVisitedByInput
  }

  export type VisitedPlaceUncheckedCreateWithoutUserInput = {
    id?: number
    at?: Date | string
    placeId: number
  }

  export type VisitedPlaceCreateOrConnectWithoutUserInput = {
    where: VisitedPlaceWhereUniqueInput
    create: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput>
  }

  export type VisitedPlaceCreateManyUserInputEnvelope = {
    data: VisitedPlaceCreateManyUserInput | VisitedPlaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    createdAt?: Date | string
    chatGroupId: number
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutCreatorInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    items?: RouteItemCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    items?: RouteItemUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutCreatorInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput>
  }

  export type RouteCreateManyCreatorInputEnvelope = {
    data: RouteCreateManyCreatorInput | RouteCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type FriendShipCreateWithoutSenderInput = {
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendShipUncheckedCreateWithoutSenderInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    receiverId: number
  }

  export type FriendShipCreateOrConnectWithoutSenderInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput>
  }

  export type FriendShipCreateManySenderInputEnvelope = {
    data: FriendShipCreateManySenderInput | FriendShipCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FriendShipCreateWithoutReceiverInput = {
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentFriendRequestsInput
  }

  export type FriendShipUncheckedCreateWithoutReceiverInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    senderId: number
  }

  export type FriendShipCreateOrConnectWithoutReceiverInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendShipCreateManyReceiverInputEnvelope = {
    data: FriendShipCreateManyReceiverInput | FriendShipCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutHostInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutHostInput, ActivityUncheckedUpdateWithoutHostInput>
    create: XOR<ActivityCreateWithoutHostInput, ActivityUncheckedCreateWithoutHostInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutHostInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutHostInput, ActivityUncheckedUpdateWithoutHostInput>
  }

  export type ActivityUpdateManyWithWhereWithoutHostInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutHostInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: IntFilter<"Activity"> | number
    category?: EnumActivityCategoryFilter<"Activity"> | $Enums.ActivityCategory
    title?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    maxParticipants?: IntFilter<"Activity"> | number
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    eventStartDate?: DateTimeFilter<"Activity"> | Date | string
    eventEndDate?: DateTimeFilter<"Activity"> | Date | string
    isPublic?: BoolFilter<"Activity"> | boolean
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    hostId?: IntFilter<"Activity"> | number
    placeId?: IntNullableFilter<"Activity"> | number | null
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinRequestScalarWhereInput = {
    AND?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    OR?: JoinRequestScalarWhereInput[]
    NOT?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    id?: IntFilter<"JoinRequest"> | number
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    userId?: IntFilter<"JoinRequest"> | number
    activityId?: IntFilter<"JoinRequest"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    imageUrl?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    reviewerId?: IntFilter<"Review"> | number
    receiverId?: IntNullableFilter<"Review"> | number | null
    activityId?: IntFilter<"Review"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReceiverInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReceiverInput>
  }

  export type VisitedPlaceUpsertWithWhereUniqueWithoutUserInput = {
    where: VisitedPlaceWhereUniqueInput
    update: XOR<VisitedPlaceUpdateWithoutUserInput, VisitedPlaceUncheckedUpdateWithoutUserInput>
    create: XOR<VisitedPlaceCreateWithoutUserInput, VisitedPlaceUncheckedCreateWithoutUserInput>
  }

  export type VisitedPlaceUpdateWithWhereUniqueWithoutUserInput = {
    where: VisitedPlaceWhereUniqueInput
    data: XOR<VisitedPlaceUpdateWithoutUserInput, VisitedPlaceUncheckedUpdateWithoutUserInput>
  }

  export type VisitedPlaceUpdateManyWithWhereWithoutUserInput = {
    where: VisitedPlaceScalarWhereInput
    data: XOR<VisitedPlaceUpdateManyMutationInput, VisitedPlaceUncheckedUpdateManyWithoutUserInput>
  }

  export type VisitedPlaceScalarWhereInput = {
    AND?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
    OR?: VisitedPlaceScalarWhereInput[]
    NOT?: VisitedPlaceScalarWhereInput | VisitedPlaceScalarWhereInput[]
    id?: IntFilter<"VisitedPlace"> | number
    at?: DateTimeFilter<"VisitedPlace"> | Date | string
    userId?: IntFilter<"VisitedPlace"> | number
    placeId?: IntFilter<"VisitedPlace"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    chatGroupId?: IntFilter<"Message"> | number
  }

  export type RouteUpsertWithWhereUniqueWithoutCreatorInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutCreatorInput, RouteUncheckedUpdateWithoutCreatorInput>
    create: XOR<RouteCreateWithoutCreatorInput, RouteUncheckedCreateWithoutCreatorInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutCreatorInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutCreatorInput, RouteUncheckedUpdateWithoutCreatorInput>
  }

  export type RouteUpdateManyWithWhereWithoutCreatorInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutCreatorInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    creatorId?: IntFilter<"Route"> | number
    createdAt?: DateTimeFilter<"Route"> | Date | string
  }

  export type FriendShipUpsertWithWhereUniqueWithoutSenderInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutSenderInput, FriendShipUncheckedUpdateWithoutSenderInput>
    create: XOR<FriendShipCreateWithoutSenderInput, FriendShipUncheckedCreateWithoutSenderInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutSenderInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutSenderInput, FriendShipUncheckedUpdateWithoutSenderInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutSenderInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutSenderInput>
  }

  export type FriendShipScalarWhereInput = {
    AND?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
    OR?: FriendShipScalarWhereInput[]
    NOT?: FriendShipScalarWhereInput | FriendShipScalarWhereInput[]
    id?: IntFilter<"FriendShip"> | number
    status?: EnumFriendshipStatusFilter<"FriendShip"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"FriendShip"> | Date | string
    senderId?: IntFilter<"FriendShip"> | number
    receiverId?: IntFilter<"FriendShip"> | number
  }

  export type FriendShipUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutReceiverInput, FriendShipUncheckedUpdateWithoutReceiverInput>
    create: XOR<FriendShipCreateWithoutReceiverInput, FriendShipUncheckedCreateWithoutReceiverInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutReceiverInput, FriendShipUncheckedUpdateWithoutReceiverInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutReceiverInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutCreatedActivitiesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCreatedActivitiesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCreatedActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedActivitiesInput, UserUncheckedCreateWithoutCreatedActivitiesInput>
  }

  export type PlaceCreateWithoutActivitiesInput = {
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutActivitiesInput = {
    id?: number
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceUncheckedCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutActivitiesInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutActivitiesInput, PlaceUncheckedCreateWithoutActivitiesInput>
  }

  export type JoinRequestCreateWithoutActivityInput = {
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutActivityInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: number
  }

  export type JoinRequestCreateOrConnectWithoutActivityInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput>
  }

  export type JoinRequestCreateManyActivityInputEnvelope = {
    data: JoinRequestCreateManyActivityInput | JoinRequestCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutActivityInput = {
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsGivenInput
    receiver?: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutActivityInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    receiverId?: number | null
  }

  export type ReviewCreateOrConnectWithoutActivityInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput>
  }

  export type ReviewCreateManyActivityInputEnvelope = {
    data: ReviewCreateManyActivityInput | ReviewCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupCreateWithoutActivityInput = {
    messages?: MessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutActivityInput = {
    id?: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutActivityInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
  }

  export type UserUpsertWithoutCreatedActivitiesInput = {
    update: XOR<UserUpdateWithoutCreatedActivitiesInput, UserUncheckedUpdateWithoutCreatedActivitiesInput>
    create: XOR<UserCreateWithoutCreatedActivitiesInput, UserUncheckedCreateWithoutCreatedActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedActivitiesInput, UserUncheckedUpdateWithoutCreatedActivitiesInput>
  }

  export type UserUpdateWithoutCreatedActivitiesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlaceUpsertWithoutActivitiesInput = {
    update: XOR<PlaceUpdateWithoutActivitiesInput, PlaceUncheckedUpdateWithoutActivitiesInput>
    create: XOR<PlaceCreateWithoutActivitiesInput, PlaceUncheckedCreateWithoutActivitiesInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutActivitiesInput, PlaceUncheckedUpdateWithoutActivitiesInput>
  }

  export type PlaceUpdateWithoutActivitiesInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUncheckedUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutActivityInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutActivityInput, JoinRequestUncheckedUpdateWithoutActivityInput>
    create: XOR<JoinRequestCreateWithoutActivityInput, JoinRequestUncheckedCreateWithoutActivityInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutActivityInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutActivityInput, JoinRequestUncheckedUpdateWithoutActivityInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutActivityInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutActivityInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutActivityInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutActivityInput, ReviewUncheckedUpdateWithoutActivityInput>
    create: XOR<ReviewCreateWithoutActivityInput, ReviewUncheckedCreateWithoutActivityInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutActivityInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutActivityInput, ReviewUncheckedUpdateWithoutActivityInput>
  }

  export type ReviewUpdateManyWithWhereWithoutActivityInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutActivityInput>
  }

  export type ChatGroupUpsertWithoutActivityInput = {
    update: XOR<ChatGroupUpdateWithoutActivityInput, ChatGroupUncheckedUpdateWithoutActivityInput>
    create: XOR<ChatGroupCreateWithoutActivityInput, ChatGroupUncheckedCreateWithoutActivityInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutActivityInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutActivityInput, ChatGroupUncheckedUpdateWithoutActivityInput>
  }

  export type ChatGroupUpdateWithoutActivityInput = {
    messages?: MessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type UserCreateWithoutJoinRequestsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutJoinRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
  }

  export type ActivityCreateWithoutJoinRequestsInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutCreatedActivitiesInput
    place?: PlaceCreateNestedOneWithoutActivitiesInput
    reviews?: ReviewCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutJoinRequestsInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    placeId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupUncheckedCreateNestedOneWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutJoinRequestsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutJoinRequestsInput, ActivityUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserUpsertWithoutJoinRequestsInput = {
    update: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateWithoutJoinRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ActivityUpsertWithoutJoinRequestsInput = {
    update: XOR<ActivityUpdateWithoutJoinRequestsInput, ActivityUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<ActivityCreateWithoutJoinRequestsInput, ActivityUncheckedCreateWithoutJoinRequestsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutJoinRequestsInput, ActivityUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type ActivityUpdateWithoutJoinRequestsInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput
    place?: PlaceUpdateOneWithoutActivitiesNestedInput
    reviews?: ReviewUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutJoinRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUncheckedUpdateOneWithoutActivityNestedInput
  }

  export type VisitedPlaceCreateWithoutPlaceInput = {
    at?: Date | string
    user: UserCreateNestedOneWithoutVisitedPlacesInput
  }

  export type VisitedPlaceUncheckedCreateWithoutPlaceInput = {
    id?: number
    at?: Date | string
    userId: number
  }

  export type VisitedPlaceCreateOrConnectWithoutPlaceInput = {
    where: VisitedPlaceWhereUniqueInput
    create: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput>
  }

  export type VisitedPlaceCreateManyPlaceInputEnvelope = {
    data: VisitedPlaceCreateManyPlaceInput | VisitedPlaceCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutPlaceInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutCreatedActivitiesInput
    joinRequests?: JoinRequestCreateNestedManyWithoutActivityInput
    reviews?: ReviewCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutPlaceInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutActivityInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupUncheckedCreateNestedOneWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutPlaceInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput>
  }

  export type ActivityCreateManyPlaceInputEnvelope = {
    data: ActivityCreateManyPlaceInput | ActivityCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type RouteItemCreateWithoutPlaceInput = {
    order: number
    route: RouteCreateNestedOneWithoutItemsInput
  }

  export type RouteItemUncheckedCreateWithoutPlaceInput = {
    id?: number
    order: number
    routeId: number
  }

  export type RouteItemCreateOrConnectWithoutPlaceInput = {
    where: RouteItemWhereUniqueInput
    create: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput>
  }

  export type RouteItemCreateManyPlaceInputEnvelope = {
    data: RouteItemCreateManyPlaceInput | RouteItemCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type VisitedPlaceUpsertWithWhereUniqueWithoutPlaceInput = {
    where: VisitedPlaceWhereUniqueInput
    update: XOR<VisitedPlaceUpdateWithoutPlaceInput, VisitedPlaceUncheckedUpdateWithoutPlaceInput>
    create: XOR<VisitedPlaceCreateWithoutPlaceInput, VisitedPlaceUncheckedCreateWithoutPlaceInput>
  }

  export type VisitedPlaceUpdateWithWhereUniqueWithoutPlaceInput = {
    where: VisitedPlaceWhereUniqueInput
    data: XOR<VisitedPlaceUpdateWithoutPlaceInput, VisitedPlaceUncheckedUpdateWithoutPlaceInput>
  }

  export type VisitedPlaceUpdateManyWithWhereWithoutPlaceInput = {
    where: VisitedPlaceScalarWhereInput
    data: XOR<VisitedPlaceUpdateManyMutationInput, VisitedPlaceUncheckedUpdateManyWithoutPlaceInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutPlaceInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutPlaceInput, ActivityUncheckedUpdateWithoutPlaceInput>
    create: XOR<ActivityCreateWithoutPlaceInput, ActivityUncheckedCreateWithoutPlaceInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutPlaceInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutPlaceInput, ActivityUncheckedUpdateWithoutPlaceInput>
  }

  export type ActivityUpdateManyWithWhereWithoutPlaceInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutPlaceInput>
  }

  export type RouteItemUpsertWithWhereUniqueWithoutPlaceInput = {
    where: RouteItemWhereUniqueInput
    update: XOR<RouteItemUpdateWithoutPlaceInput, RouteItemUncheckedUpdateWithoutPlaceInput>
    create: XOR<RouteItemCreateWithoutPlaceInput, RouteItemUncheckedCreateWithoutPlaceInput>
  }

  export type RouteItemUpdateWithWhereUniqueWithoutPlaceInput = {
    where: RouteItemWhereUniqueInput
    data: XOR<RouteItemUpdateWithoutPlaceInput, RouteItemUncheckedUpdateWithoutPlaceInput>
  }

  export type RouteItemUpdateManyWithWhereWithoutPlaceInput = {
    where: RouteItemScalarWhereInput
    data: XOR<RouteItemUpdateManyMutationInput, RouteItemUncheckedUpdateManyWithoutPlaceInput>
  }

  export type RouteItemScalarWhereInput = {
    AND?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
    OR?: RouteItemScalarWhereInput[]
    NOT?: RouteItemScalarWhereInput | RouteItemScalarWhereInput[]
    id?: IntFilter<"RouteItem"> | number
    order?: IntFilter<"RouteItem"> | number
    routeId?: IntFilter<"RouteItem"> | number
    placeId?: IntFilter<"RouteItem"> | number
  }

  export type UserCreateWithoutReviewsGivenInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type ActivityCreateWithoutReviewsInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutCreatedActivitiesInput
    place?: PlaceCreateNestedOneWithoutActivitiesInput
    joinRequests?: JoinRequestCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupCreateNestedOneWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutReviewsInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    placeId?: number | null
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutActivityInput
    chatGroup?: ChatGroupUncheckedCreateNestedOneWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutReviewsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutReviewsInput, ActivityUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ActivityUpsertWithoutReviewsInput = {
    update: XOR<ActivityUpdateWithoutReviewsInput, ActivityUncheckedUpdateWithoutReviewsInput>
    create: XOR<ActivityCreateWithoutReviewsInput, ActivityUncheckedCreateWithoutReviewsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutReviewsInput, ActivityUncheckedUpdateWithoutReviewsInput>
  }

  export type ActivityUpdateWithoutReviewsInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput
    place?: PlaceUpdateOneWithoutActivitiesNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUncheckedUpdateOneWithoutActivityNestedInput
  }

  export type UserCreateWithoutCreatedRoutesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCreatedRoutesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCreatedRoutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRoutesInput, UserUncheckedCreateWithoutCreatedRoutesInput>
  }

  export type RouteItemCreateWithoutRouteInput = {
    order: number
    place: PlaceCreateNestedOneWithoutRouteItemsInput
  }

  export type RouteItemUncheckedCreateWithoutRouteInput = {
    id?: number
    order: number
    placeId: number
  }

  export type RouteItemCreateOrConnectWithoutRouteInput = {
    where: RouteItemWhereUniqueInput
    create: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput>
  }

  export type RouteItemCreateManyRouteInputEnvelope = {
    data: RouteItemCreateManyRouteInput | RouteItemCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRoutesInput = {
    update: XOR<UserUpdateWithoutCreatedRoutesInput, UserUncheckedUpdateWithoutCreatedRoutesInput>
    create: XOR<UserCreateWithoutCreatedRoutesInput, UserUncheckedCreateWithoutCreatedRoutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRoutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRoutesInput, UserUncheckedUpdateWithoutCreatedRoutesInput>
  }

  export type UserUpdateWithoutCreatedRoutesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type RouteItemUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteItemWhereUniqueInput
    update: XOR<RouteItemUpdateWithoutRouteInput, RouteItemUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteItemCreateWithoutRouteInput, RouteItemUncheckedCreateWithoutRouteInput>
  }

  export type RouteItemUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteItemWhereUniqueInput
    data: XOR<RouteItemUpdateWithoutRouteInput, RouteItemUncheckedUpdateWithoutRouteInput>
  }

  export type RouteItemUpdateManyWithWhereWithoutRouteInput = {
    where: RouteItemScalarWhereInput
    data: XOR<RouteItemUpdateManyMutationInput, RouteItemUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteCreateWithoutItemsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedRoutesInput
  }

  export type RouteUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
    description?: string | null
    creatorId: number
    createdAt?: Date | string
  }

  export type RouteCreateOrConnectWithoutItemsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutItemsInput, RouteUncheckedCreateWithoutItemsInput>
  }

  export type PlaceCreateWithoutRouteItemsInput = {
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceCreateNestedManyWithoutPlaceInput
    activities?: ActivityCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutRouteItemsInput = {
    id?: number
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    visitedBy?: VisitedPlaceUncheckedCreateNestedManyWithoutPlaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutRouteItemsInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutRouteItemsInput, PlaceUncheckedCreateWithoutRouteItemsInput>
  }

  export type RouteUpsertWithoutItemsInput = {
    update: XOR<RouteUpdateWithoutItemsInput, RouteUncheckedUpdateWithoutItemsInput>
    create: XOR<RouteCreateWithoutItemsInput, RouteUncheckedCreateWithoutItemsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutItemsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutItemsInput, RouteUncheckedUpdateWithoutItemsInput>
  }

  export type RouteUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedRoutesNestedInput
  }

  export type RouteUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceUpsertWithoutRouteItemsInput = {
    update: XOR<PlaceUpdateWithoutRouteItemsInput, PlaceUncheckedUpdateWithoutRouteItemsInput>
    create: XOR<PlaceCreateWithoutRouteItemsInput, PlaceUncheckedCreateWithoutRouteItemsInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutRouteItemsInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutRouteItemsInput, PlaceUncheckedUpdateWithoutRouteItemsInput>
  }

  export type PlaceUpdateWithoutRouteItemsInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUpdateManyWithoutPlaceNestedInput
    activities?: ActivityUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutRouteItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    visitedBy?: VisitedPlaceUncheckedUpdateManyWithoutPlaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type UserCreateWithoutSentFriendRequestsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentFriendRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
  }

  export type UserCreateWithoutReceivedFriendRequestsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendRequestsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpsertWithoutSentFriendRequestsInput = {
    update: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateWithoutSentFriendRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedFriendRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpdateWithoutReceivedFriendRequestsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutVisitedPlacesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutVisitedPlacesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutVisitedPlacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitedPlacesInput, UserUncheckedCreateWithoutVisitedPlacesInput>
  }

  export type PlaceCreateWithoutVisitedByInput = {
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    activities?: ActivityCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutVisitedByInput = {
    id?: number
    placeName: string
    latitude: number
    longitude: number
    address?: string | null
    activities?: ActivityUncheckedCreateNestedManyWithoutPlaceInput
    routeItems?: RouteItemUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutVisitedByInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutVisitedByInput, PlaceUncheckedCreateWithoutVisitedByInput>
  }

  export type UserUpsertWithoutVisitedPlacesInput = {
    update: XOR<UserUpdateWithoutVisitedPlacesInput, UserUncheckedUpdateWithoutVisitedPlacesInput>
    create: XOR<UserCreateWithoutVisitedPlacesInput, UserUncheckedCreateWithoutVisitedPlacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitedPlacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitedPlacesInput, UserUncheckedUpdateWithoutVisitedPlacesInput>
  }

  export type UserUpdateWithoutVisitedPlacesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitedPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlaceUpsertWithoutVisitedByInput = {
    update: XOR<PlaceUpdateWithoutVisitedByInput, PlaceUncheckedUpdateWithoutVisitedByInput>
    create: XOR<PlaceCreateWithoutVisitedByInput, PlaceUncheckedCreateWithoutVisitedByInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutVisitedByInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutVisitedByInput, PlaceUncheckedUpdateWithoutVisitedByInput>
  }

  export type PlaceUpdateWithoutVisitedByInput = {
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ActivityUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutVisitedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    activities?: ActivityUncheckedUpdateManyWithoutPlaceNestedInput
    routeItems?: RouteItemUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type ActivityCreateWithoutChatGroupInput = {
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutCreatedActivitiesInput
    place?: PlaceCreateNestedOneWithoutActivitiesInput
    joinRequests?: JoinRequestCreateNestedManyWithoutActivityInput
    reviews?: ReviewCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutChatGroupInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
    placeId?: number | null
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutActivityInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutChatGroupInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutChatGroupInput, ActivityUncheckedCreateWithoutChatGroupInput>
  }

  export type MessageCreateWithoutChatGroupInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatGroupInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
  }

  export type MessageCreateOrConnectWithoutChatGroupInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput>
  }

  export type MessageCreateManyChatGroupInputEnvelope = {
    data: MessageCreateManyChatGroupInput | MessageCreateManyChatGroupInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithoutChatGroupInput = {
    update: XOR<ActivityUpdateWithoutChatGroupInput, ActivityUncheckedUpdateWithoutChatGroupInput>
    create: XOR<ActivityCreateWithoutChatGroupInput, ActivityUncheckedCreateWithoutChatGroupInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutChatGroupInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutChatGroupInput, ActivityUncheckedUpdateWithoutChatGroupInput>
  }

  export type ActivityUpdateWithoutChatGroupInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput
    place?: PlaceUpdateOneWithoutActivitiesNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatGroupInput, MessageUncheckedUpdateWithoutChatGroupInput>
    create: XOR<MessageCreateWithoutChatGroupInput, MessageUncheckedCreateWithoutChatGroupInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatGroupInput, MessageUncheckedUpdateWithoutChatGroupInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatGroupInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type UserCreateWithoutMessagesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceCreateNestedManyWithoutUserInput
    createdRoutes?: RouteCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    gender: $Enums.genderStatus
    profileImg?: string | null
    bio?: string | null
    isVerified?: boolean
    faceDescriptor?: string | null
    trustScore?: number
    createdAt?: Date | string
    createdActivities?: ActivityUncheckedCreateNestedManyWithoutHostInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    visitedPlaces?: VisitedPlaceUncheckedCreateNestedManyWithoutUserInput
    createdRoutes?: RouteUncheckedCreateNestedManyWithoutCreatorInput
    sentFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendShipUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatGroupCreateWithoutMessagesInput = {
    activity: ActivityCreateNestedOneWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutMessagesInput = {
    id?: number
    activityId: number
  }

  export type ChatGroupCreateOrConnectWithoutMessagesInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUpdateManyWithoutUserNestedInput
    createdRoutes?: RouteUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    faceDescriptor?: NullableStringFieldUpdateOperationsInput | string | null
    trustScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdActivities?: ActivityUncheckedUpdateManyWithoutHostNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    visitedPlaces?: VisitedPlaceUncheckedUpdateManyWithoutUserNestedInput
    createdRoutes?: RouteUncheckedUpdateManyWithoutCreatorNestedInput
    sentFriendRequests?: FriendShipUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendShipUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ChatGroupUpsertWithoutMessagesInput = {
    update: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUpdateWithoutMessagesInput = {
    activity?: ActivityUpdateOneRequiredWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateManyHostInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    placeId?: number | null
  }

  export type JoinRequestCreateManyUserInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    activityId: number
  }

  export type ReviewCreateManyReviewerInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    receiverId?: number | null
    activityId: number
  }

  export type ReviewCreateManyReceiverInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    activityId: number
  }

  export type VisitedPlaceCreateManyUserInput = {
    id?: number
    at?: Date | string
    placeId: number
  }

  export type MessageCreateManySenderInput = {
    id?: number
    content: string
    createdAt?: Date | string
    chatGroupId: number
  }

  export type RouteCreateManyCreatorInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type FriendShipCreateManySenderInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    receiverId: number
  }

  export type FriendShipCreateManyReceiverInput = {
    id?: number
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    senderId: number
  }

  export type ActivityUpdateWithoutHostInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneWithoutActivitiesNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUncheckedUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JoinRequestUpdateWithoutUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneWithoutReviewsReceivedNestedInput
    activity?: ActivityUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutReceiverInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    activity?: ActivityUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitedPlaceUpdateWithoutUserInput = {
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneRequiredWithoutVisitedByNestedInput
  }

  export type VisitedPlaceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitedPlaceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RouteItemUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RouteItemUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendShipUpdateWithoutSenderInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUpdateWithoutReceiverInput = {
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type JoinRequestCreateManyActivityInput = {
    id?: number
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    userId: number
  }

  export type ReviewCreateManyActivityInput = {
    id?: number
    rating: number
    comment?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    reviewerId: number
    receiverId?: number | null
  }

  export type JoinRequestUpdateWithoutActivityInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type JoinRequestUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutActivityInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    receiver?: UserUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VisitedPlaceCreateManyPlaceInput = {
    id?: number
    at?: Date | string
    userId: number
  }

  export type ActivityCreateManyPlaceInput = {
    id?: number
    category: $Enums.ActivityCategory
    title: string
    description: string
    maxParticipants: number
    status?: $Enums.ActivityStatus
    eventStartDate: Date | string
    eventEndDate: Date | string
    isPublic?: boolean
    createdAt?: Date | string
    hostId: number
  }

  export type RouteItemCreateManyPlaceInput = {
    id?: number
    order: number
    routeId: number
  }

  export type VisitedPlaceUpdateWithoutPlaceInput = {
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVisitedPlacesNestedInput
  }

  export type VisitedPlaceUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitedPlaceUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityUpdateWithoutPlaceInput = {
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutCreatedActivitiesNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutActivityNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutActivityNestedInput
    chatGroup?: ChatGroupUncheckedUpdateOneWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumActivityCategoryFieldUpdateOperationsInput | $Enums.ActivityCategory
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    eventStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemUpdateWithoutPlaceInput = {
    order?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RouteItemUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemCreateManyRouteInput = {
    id?: number
    order: number
    placeId: number
  }

  export type RouteItemUpdateWithoutRouteInput = {
    order?: IntFieldUpdateOperationsInput | number
    place?: PlaceUpdateOneRequiredWithoutRouteItemsNestedInput
  }

  export type RouteItemUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteItemUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyChatGroupInput = {
    id?: number
    content: string
    createdAt?: Date | string
    senderId: number
  }

  export type MessageUpdateWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}