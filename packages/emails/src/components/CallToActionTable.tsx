export const CallToActionTable = (props: { children: React.ReactNode }) => (
  <table>
    <tbody>
      <tr>
        <td
          align="center"
          bgcolor="#8f6cc9"
          role="presentation"
          style={{
            border: "none",
            borderRadius: "3px",
            cursor: "auto",
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            msoPaddingAlt: "10px 25px",
            background: "#8f6cc9",
          }}
          valign="middle">
          {props.children}
        </td>
      </tr>
    </tbody>
  </table>
);
