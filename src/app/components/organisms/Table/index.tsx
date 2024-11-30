import Image from 'next/image';
import { FC } from 'react';

const TABLE_HEADER_CELL_LABELS = ['ID', 'NAME', 'AGE', 'ADDRESS'];

const mockData = [
  {
    id: 1,
    name: 'Pedro',
    age: 23,
    address: 'Rua dos Fornos',
  },
  {
    id: 2,
    name: 'João',
    age: 21,
    address: 'Rua dos 1',
  },
  {
    id: 3,
    name: 'André',
    age: 20,
    address: 'Rua dos 2',
  },
  {
    id: 4,
    name: 'Ana',
    age: 24,
    address: 'Rua dos 3',
  },
  {
    id: 5,
    name: 'Sofia',
    age: 25,
    address: 'Rua dos 4',
  },
  {
    id: 6,
    name: 'Ricardo',
    age: 20,
    address: 'Rua dos 5',
  },
  {
    id: 7,
    name: 'António',
    age: 19,
    address: 'Rua dos 6',
  },
];

export const InfiniteScrollTable: FC = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
          <tr>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Access Level</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-4 px-6 flex items-center space-x-4">
              <Image
                className="rounded-full"
                src="/xxx.png"
                alt="Profile picture"
                width={50}
                height={50}
              />
              <span className="font-medium text-gray-900">Factual Cody</span>
            </td>
            <td className="py-4 px-6">Owner</td>
            <td className="py-4 px-6">Sept 07, 2023</td>
            <td className="py-4 px-6 flex items-center space-x-2">
              <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm">
                Code
              </button>
              <button className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm">
                Share
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 12h12M6 6h12M6 18h12"
                  />
                </svg>
              </button>
            </td>
          </tr>

          <tr className="border-b hover:bg-gray-50">
            <td className="py-4 px-6 flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="path_to_image"
                alt="Profile picture"
              />
              <span className="font-medium text-gray-900">Alan Marcus</span>
            </td>
            <td className="py-4 px-6">Owner</td>
            <td className="py-4 px-6">Sept 07, 2023</td>
            <td className="py-4 px-6 flex items-center space-x-2">
              <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm">
                Code
              </button>
              <button className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm">
                Share
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 12h12M6 6h12M6 18h12"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};
