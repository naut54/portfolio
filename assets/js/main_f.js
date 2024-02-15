import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

function validateForm(formId) {
  var form = document.getElementById(formId);
  var inputs = form.querySelectorAll('input, textarea');

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          swal('Faltan algunas cosas', 'Por favor, completa todos los campos.');
          return false;
      }
  }

  return true;
}