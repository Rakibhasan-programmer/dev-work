import React from "react";

const Verification = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="block md:flex justify-between items-center flex-col md:flex-row p-4">
          <input
            type="checkbox"
            className="hidden md:block checkbox checkbox-secondary"
          />

          <select className="select select-bordered w-48 mb-2 md:mb-0">
            <option selected>Bulk Action</option>
            <option>Verified</option>
            <option>Unverified</option>
          </select>

          <div className="flex gap-4">
            <select className="select select-bordered w-48">
              <option selected>Sort By</option>
              <option>Verified</option>
              <option>Unverified</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-secondary"
                  />
                </th>
                <th>ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Id</th>
                <th>Phone Number</th>
                <th>Complited Parcentage</th>
                <th>Account Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                </td>
                <td>001</td>
                <td>image</td>
                <td>Ibrahim</td>
                <td>sobuj pata</td>
                <td>01234567890</td>
                <td>100%</td>
                <td>Vreified</td>
              </tr>

              <tr className="hover">
                <td>
                  <input
                    type="checkbox"
                    checked
                    className="checkbox checkbox-secondary"
                  />
                </td>
                <td>002</td>
                <td>image</td>
                <td>Ibrahim</td>
                <td>fb.com/user01</td>
                <td>01234567890</td>
                <td>60%</td>
                <td>Unverified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Verification;
