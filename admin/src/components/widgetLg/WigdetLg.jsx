import "./widgetlg.css";

export default function WigdetLg() {

  const Button = ({type}) => {
    return <button className={"largeWigdetButton " + type}>{type}</button>
  }

  return (
    <div className="largeWigdet">
      <h3 className="largeWigdetTitle">Latest transactions</h3>
      <table className="largeWigdetTable">
          <tr className="largeWigdetTr">
              <th className="largeWigdetTh">Customer</th>
              <th className="largeWigdetTh">Date</th>
              <th className="largeWigdetTh">Amount</th>
              <th className="largeWigdetTh">Status</th>
          </tr>
          <tr className="largeWigdetTh">
             <td className="largeWigdetUser">
             <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="largeWigdetImage" />
             <span className="largeWigdetName">Dip Dip Dipo</span>
             </td>
             <td className="largeWigdetDate">2 Jul 2021</td>
             <td className="largeWigdetAmount">$122.00</td>
             <td className="largeWigdetStatus">
               <Button type="approved"/>
             </td>
          </tr>
          <tr className="largeWigdetTh">
             <td className="largeWigdetUser">
             <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="largeWigdetImage" />
             <span className="largeWigdetName">Dip Dip Dipo</span>
             </td>
             <td className="largeWigdetDate">2 Jul 2021</td>
             <td className="largeWigdetAmount">$122.00</td>
             <td className="largeWigdetStatus">
               <Button type="approved"/>
             </td>
          </tr>
          <tr className="largeWigdetTh">
             <td className="largeWigdetUser">
             <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="largeWigdetImage" />
             <span className="largeWigdetName">Dip Dip Dipo</span>
             </td>
             <td className="largeWigdetDate">2 Jul 2021</td>
             <td className="largeWigdetAmount">$122.00</td>
             <td className="largeWigdetStatus">
               <Button type="declined"/>
             </td>
          </tr>
          <tr className="largeWigdetTh">
             <td className="largeWigdetUser">
             <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="largeWigdetImage" />
             <span className="largeWigdetName">Dip Dip Dipo</span>
             </td>
             <td className="largeWigdetDate">2 Jul 2021</td>
             <td className="largeWigdetAmount">$122.00</td>
             <td className="largeWigdetStatus">
               <Button type="approved"/>
             </td>
          </tr>
          <tr className="largeWigdetTh">
             <td className="largeWigdetUser">
             <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="largeWigdetImage" />
             <span className="largeWigdetName">Dip Dip Dipo</span>
             </td>
             <td className="largeWigdetDate">2 Jul 2021</td>
             <td className="largeWigdetAmount">$122.00</td>
             <td className="largeWigdetStatus">
               <Button type="pending"/>
             </td>
          </tr>
      </table>
    </div>
  )
}
