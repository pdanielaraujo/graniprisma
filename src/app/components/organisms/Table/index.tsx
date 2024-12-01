import Image from 'next/image';
import { FC } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

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
    <div className="overflow-x-auto shadow-md">
      <table className="w-full text-left text-gray-700">
        <thead className="bg-blue-500 text-gray-100 text-sm uppercase border-b">
          <tr>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Age</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Action</th>
          </tr>
        </thead>

        <tbody>
          {mockData.map((data) => (
            <tr
              key={data.id}
              className="border-b hover:bg-gray-200 cursor-pointer"
            >
              <td className="py-4 px-6">{data.name}</td>
              <td className="py-4 px-6">{data.age}</td>
              <td className="py-4 px-6">{data.address}</td>
              <td className="py-4 px-6 flex space-x-2">
                <PencilSquareIcon
                  width={24}
                  className="text-yellow-300 hover:text-yellow-500"
                />
                <TrashIcon
                  width={24}
                  className="text-red-300 hover:text-red-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
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
      </div> */}
    </div>
  );
};
