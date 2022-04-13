export type TTechStack = {
  value: number;
  name: string;
  icon: string;
  description: string;
  disabled: boolean;
};

export const TECHNOLOGY_STACK: TTechStack[] = [
  {
    value: 0,
    name: "TypeScript",
    icon: "https://static.frapy.co/assets/brand/typescript.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "JavaScript",
    icon: "https://static.frapy.co/assets/brand/javascript.svg",
    description: "",
    disabled: false,
  },
  {
    value: 2,
    name: ".NET",
    icon: "https://static.frapy.co/assets/brand/dotnet.svg",
    description: "",
    disabled: true,
  },
  {
    value: 3,
    name: "Phyton",
    icon: "https://static.frapy.co/assets/brand/phyton.svg",
    description: "",
    disabled: true,
  },
  {
    value: 4,
    name: "Java",
    icon: "https://static.frapy.co/assets/brand/java.svg",
    description: "",
    disabled: true,
  },
  {
    value: 5,
    name: "GO",
    icon: "https://static.frapy.co/assets/brand/go.svg",
    description: "",
    disabled: true,
  },
];

export const ARCHITECTURE: TTechStack[] = [
  {
    value: 0,
    name: "Monolith",
    icon: "https://static.frapy.co/assets/brand/monolith.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "Microservice",
    icon: "https://static.frapy.co/assets/brand/microservice.svg",
    description: "",
    disabled: true,
  },
];

export const DATABASE: TTechStack[] = [
  {
    value: 0,
    name: "PostgreSQL",
    icon: "https://static.frapy.co/assets/brand/postgresql.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "MySQL",
    icon: "https://static.frapy.co/assets/brand/mysql.svg",
    description: "",
    disabled: false,
  },
  {
    value: 2,
    name: "MariaDB",
    icon: "https://static.frapy.co/assets/brand/mariadb.svg",
    description: "",
    disabled: true,
  },
  {
    value: 3,
    name: "MS SQL",
    icon: "https://static.frapy.co/assets/brand/mssql.svg",
    description: "",
    disabled: true,
  },
  {
    value: 4,
    name: "BigQuery",
    icon: "https://static.frapy.co/assets/brand/big-query.svg",
    description: "",
    disabled: true,
  },
  {
    value: 5,
    name: "MongoDB",
    icon: "https://static.frapy.co/assets/brand/mongodb.svg",
    description: "",
    disabled: true,
  },
  {
    value: 6,
    name: "DynamoDB",
    icon: "https://static.frapy.co/assets/brand/dynamodb.svg",
    description: "",
    disabled: true,
  },
  {
    value: 7,
    name: "Redis",
    icon: "https://static.frapy.co/assets/brand/redis.svg",
    description: "",
    disabled: true,
  },
  {
    value: 8,
    name: "CoachDB",
    icon: "https://static.frapy.co/assets/brand/coachdb.svg",
    description: "",
    disabled: true,
  },
];

export const DATABASE_ORM: TTechStack[] = [
  {
    value: 0,
    name: "TypeORM",
    icon: "https://static.frapy.co/assets/brand/typeorm.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "Prisma",
    icon: "https://static.frapy.co/assets/brand/prisma.svg",
    description: "",
    disabled: true,
  },
];

export const API_ARCHITECTURE: TTechStack[] = [
  {
    value: 0,
    name: "Rest API",
    icon: "https://static.frapy.co/assets/brand/restapi.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "GraphQL",
    icon: "https://static.frapy.co/assets/brand/graphql.svg",
    description: "",
    disabled: true,
  },
];

export const FRAMEWORK: TTechStack[] = [
  {
    value: 0,
    name: "ExpressJS",
    icon: "https://static.frapy.co/assets/brand/expressjs.svg",
    description: "",
    disabled: false,
  },
  {
    value: 1,
    name: "NestJS",
    icon: "https://static.frapy.co/assets/brand/nestjs.svg",
    description: "",
    disabled: true,
  },
];
