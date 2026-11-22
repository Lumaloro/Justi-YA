
const serviciosData = [
    {
        id: 1,
        titulo: "Asesoría y Liquidación de Prestaciones Laborales",
        categoria: "Laboral",
        ciudad: "Bogotá",
        modalidad: "Virtual",
        prestador: "Dra. Laura Méndez",
        rol: "Abogado",
        tarjeta: "TP-284910 (Validada)",
        precio: 90000,
        descripcion: "Revisión de contrato laboral, cálculo de liquidación, indemnizaciones y proyección de derecho de petición.",
        condiciones: "Incluye sesión virtual de 45 minutos y entrega de documento en PDF."
    },
    {
        id: 2,
        titulo: "Vigilancia y Revisión de Expediente en Juzgado",
        categoria: "Apoyo",
        ciudad: "Bogotá",
        modalidad: "Presencial",
        prestador: "Andrés Felipe Rojas",
        rol: "Estudiante",
        tarjeta: "Estudiante 9° Semestre · U. Nacional (Validado)",
        precio: 45000,
        descripcion: "Desplazamiento a despacho judicial para toma de fotografías del expediente físico y verificación de estados.",
        condiciones: "Actividad de apoyo permitida (RN-03). No incluye representación ni litigio."
    },
    {
        id: 3,
        titulo: "Proceso de Divorcio de Mutuo Acuerdo y Custodia",
        categoria: "Familia",
        ciudad: "Medellín",
        modalidad: "Virtual",
        prestador: "Dr. Carlos Restrepo",
        rol: "Abogado",
        tarjeta: "TP-195302 (Validada)",
        precio: 250000,
        descripcion: "Orientación integral, redacción de acuerdo regulador de alimentos, visitas y trámite notarial.",
        condiciones: "Tarifa inicial de asesoría y estructuración documental."
    },
    {
        id: 4,
        titulo: "Revisión de Contratos de Arrendamiento Urbano",
        categoria: "Civil",
        ciudad: "Cali",
        modalidad: "Virtual",
        prestador: "Dra. Sofía Valencia",
        rol: "Abogado",
        tarjeta: "TP-312044 (Validada)",
        precio: 80000,
        descripcion: "Análisis de cláusulas, garantías, incrementos de canon y causales de terminación según Ley 820 de 2003.",
        condiciones: "Entrega de observaciones en 24 horas hábiles."
    },
    {
        id: 5,
        titulo: "Radicación Presencial de Oficios y Copias Auténticas",
        categoria: "Apoyo",
        ciudad: "Barranquilla",
        modalidad: "Presencial",
        prestador: "Valeria Torres",
        rol: "Estudiante",
        tarjeta: "Estudiante 8° Semestre · U. del Norte (Validado)",
        precio: 40000,
        descripcion: "Gestión de ventanilla ante notarías, oficinas de registro o juzgados con envío de comprobante sellado.",
        condiciones: "Actividad de gestión documental permitida para estudiante activo."
    },
    {
        id: 6,
        titulo: "Defensa y Representación en Audiencias Preliminares",
        categoria: "Penal",
        ciudad: "Bogotá",
        modalidad: "Presencial",
        prestador: "Dr. Javier Castellanos",
        rol: "Abogado",
        tarjeta: "TP-164890 (Validada)",
        precio: 350000,
        descripcion: "Acompañamiento técnico jurídico en etapa de indagación e imputación ante jueces de control de garantías.",
        condiciones: "Sujeto a disponibilidad de agenda y estudio previo del caso."
    }
];

const encargosData = [
    {
        id: "ENC-101",
        gestion: "Revisión de expediente físico",
        ciudad: "Bogotá D.C.",
        entidad: "Juzgado 18 Civil del Circuito",
        modalidad: "Presencial",
        valor: 50000,
        estado: "Asignado",
        fecha: "20/11/2026 09:30",
        instrucciones: "Solicitar expediente 2025-00412 en baranda y digitalizar último auto admisorio."
    },
    {
        id: "ENC-102",
        gestion: "Solicitud de copias auténticas",
        ciudad: "Medellín",
        entidad: "Notaría 15 de Medellín",
        modalidad: "Presencial",
        valor: 65000,
        estado: "Publicado",
        fecha: "20/11/2026 14:15",
        instrucciones: "Reclamar copia auténtica de escritura pública N.° 1420 con comprobante adjunto."
    }
];

const directorioData = [
    {
        entidad: "Complejo Judicial de Paloquemao",
        tipo: "Juzgados Penales",
        ciudad: "Bogotá D.C.",
        direccion: "Carrera 28A # 18A - 67",
        contacto: "Lun-Vie 8:00 a.m. - 5:00 p.m. · Ventanilla virtual Rama Judicial",
        actualizacion: "Nov 2026"
    },
    {
        entidad: "Notaría 22 del Círculo de Bogotá",
        tipo: "Notaría",
        ciudad: "Bogotá D.C.",
        direccion: "Calle 72 # 10 - 07",
        contacto: "Lun-Vie 8:00 a.m. - 5:30 p.m. · Tel: (601) 345 6789",
        actualizacion: "Nov 2026"
    },
    {
        entidad: "Palacio de Justicia José Félix de Restrepo",
        tipo: "Juzgados Civiles y Familia",
        ciudad: "Medellín",
        direccion: "Carrera 52 # 42 - 73",
        contacto: "Lun-Vie 8:00 a.m. - 5:00 p.m. · Atención presencial y virtual",
        actualizacion: "Oct 2026"
    },
    {
        entidad: "Comisaría Primera de Familia",
        tipo: "Comisaría de Familia",
        ciudad: "Cali",
        direccion: "Avenida 4N # 10 - 35",
        contacto: "Lun-Vie 7:30 a.m. - 4:30 p.m. · Línea orientación ciudadana",
        actualizacion: "Nov 2026"
    }
];

const serviciosGrid = document.getElementById("serviciosGrid");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroCiudad = document.getElementById("filtroCiudad");
const filtroModalidad = document.getElementById("filtroModalidad");
const btnLimpiarFiltros = document.getElementById("btnLimpiarFiltros");

const listaEncargos = document.getElementById("listaEncargos");
const encargoForm = document.getElementById("encargoForm");
const statEncargos = document.getElementById("statEncargos");

const tablaDirectorio = document.getElementById("tablaDirectorio");
const buscarDirectorio = document.getElementById("buscarDirectorio");

const regPerfil = document.getElementById("regPerfil");
const camposAbogado = document.getElementById("camposAbogado");
const camposEstudiante = document.getElementById("camposEstudiante");
const registroForm = document.getElementById("registroForm");
const registroFeedback = document.getElementById("registroFeedback");

const roleSimulator = document.getElementById("roleSimulator");
const roleDescription = document.getElementById("roleDescription");

const servicioModal = document.getElementById("servicioModal");
const modalBody = document.getElementById("modalBody");
const cerrarModal = document.getElementById("cerrarModal");

// Formateador de moneda COP
function formatoCOP(valor) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(valor);
}

function renderServicios() {
    const cat = filtroCategoria.value;
    const ciu = filtroCiudad.value;
    const mod = filtroModalidad.value;

    const filtrados = serviciosData.filter((s) => {
        const okCat = cat === "todas" || s.categoria === cat;
        const okCiu = ciu === "todas" || s.ciudad === ciu;
        const okMod = mod === "todas" || s.modalidad === mod;
        return okCat && okCiu && okMod;
    });

    if (filtrados.length === 0) {
        serviciosGrid.innerHTML = `<p class="card">No se encontraron servicios con los filtros seleccionados.</p>`;
        return;
    }

    serviciosGrid.innerHTML = filtrados
        .map(
            (s) => `
      <article class="card service-card">
        <div>
          <div class="badge-row">
            <span class="badge ${s.rol === "Abogado" ? "badge-abogado" : "badge-estudiante"}">
              ${s.rol === "Abogado" ? "✔ Abogado Verificado" : "🎓 Estudiante Activo"}
            </span>
            <span class="badge badge-estado">${s.modalidad}</span>
          </div>
          <h3>${s.titulo}</h3>
          <p>${s.descripcion}</p>
          <div class="service-meta">
            <span><strong>Prestador:</strong> ${s.prestador}</span>
            <span><strong>Acreditación:</strong> ${s.tarjeta}</span>
            <span><strong>Área:</strong> ${s.categoria} · <strong>Ciudad:</strong> ${s.ciudad}</span>
          </div>
        </div>
        <div class="service-footer">
          <span class="price">${formatoCOP(s.precio)}</span>
          <button class="btn btn-secondary" onclick="verDetalleServicio(${s.id})">Ver detalle</button>
        </div>
      </article>
    `
        )
        .join("");
}

window.verDetalleServicio = function (id) {
    const s = serviciosData.find((item) => item.id === id);
    if (!s) return;

    modalBody.innerHTML = `
    <span class="badge ${s.rol === "Abogado" ? "badge-abogado" : "badge-estudiante"}">
      ${s.rol} · ${s.tarjeta}
    </span>
    <h3 id="modalTitulo" style="margin-top: 0.75rem; color: var(--primary);">${s.titulo}</h3>
    <p style="margin: 0.75rem 0;">${s.descripcion}</p>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">
      <strong>Condiciones (RN-05):</strong> ${s.condiciones}
    </p>
    <p style="font-weight: 700; font-size: 1.15rem; color: var(--primary); margin-bottom: 1rem;">
      Valor estimado: ${formatoCOP(s.precio)}
    </p>
    <button class="btn btn-primary btn-block" onclick="solicitarServicioDemo('${s.titulo}')">
      Iniciar Solicitud de Servicio
    </button>
  `;
    servicioModal.classList.remove("hidden");
};

window.solicitarServicioDemo = function (titulo) {
    servicioModal.classList.add("hidden");
    alert(`Solicitud registrada en estado "Pendiente de aceptación" para: ${titulo}.\n(Trazabilidad RF-11 activada).`);
};

cerrarModal.addEventListener("click", () => servicioModal.classList.add("hidden"));
servicioModal.addEventListener("click", (e) => {
    if (e.target === servicioModal) servicioModal.classList.add("hidden");
});

function renderEncargos() {
    statEncargos.textContent = encargosData.length;
    listaEncargos.innerHTML = encargosData
        .map(
            (e) => `
      <div class="encargo-item">
        <div class="encargo-header">
          <strong>${e.id} · ${e.gestion}</strong>
          <span class="badge badge-estado">${e.estado}</span>
        </div>
        <p style="font-size: 0.9rem; margin-bottom: 0.35rem;">
          <strong>Entidad:</strong> ${e.entidad} (${e.ciudad} · ${e.modalidad})
        </p>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">${e.instrucciones}</p>
        <div style="display: flex; justify-content: space-between; font-size: 0.84rem;">
          <span><strong>Valor ofrecido:</strong> ${formatoCOP(e.valor)}</span>
          <span><strong>Registro:</strong> ${e.fecha}</span>
        </div>
      </div>
    `
        )
        .join("");
}

encargoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoEncargo = {
        id: `ENC-${100 + encargosData.length + 1}`,
        gestion: document.getElementById("tipoGestion").value,
        ciudad: document.getElementById("ciudadEncargo").value.trim(),
        entidad: document.getElementById("entidadEncargo").value.trim(),
        modalidad: document.getElementById("modalidadEncargo").value,
        valor: Number(document.getElementById("valorEncargo").value),
        estado: "Publicado",
        fecha: new Date().toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" }),
        instrucciones: document.getElementById("instruccionesEncargo").value.trim()
    };

    encargosData.unshift(nuevoEncargo);
    renderEncargos();
    encargoForm.reset();
});

function renderDirectorio(filtro = "") {
    const q = filtro.toLowerCase();
    const resultados = directorioData.filter(
        (d) =>
            d.entidad.toLowerCase().includes(q) ||
            d.ciudad.toLowerCase().includes(q) ||
            d.tipo.toLowerCase().includes(q)
    );

    tablaDirectorio.innerHTML = resultados
        .map(
            (d) => `
      <tr>
        <td><strong>${d.entidad}</strong></td>
        <td>${d.tipo}</td>
        <td>${d.ciudad}<br><small>${d.direccion}</small></td>
        <td>${d.contacto}</td>
        <td>${d.actualizacion}</td>
      </tr>
    `
        )
        .join("");
}

buscarDirectorio.addEventListener("input", (e) => renderDirectorio(e.target.value));

// Formulario dinámico de Registro según Perfil (RF-02, RF-03)
regPerfil.addEventListener("change", () => {
    const perfil = regPerfil.value;
    camposAbogado.classList.toggle("hidden", perfil !== "abogado");
    camposEstudiante.classList.toggle("hidden", perfil !== "estudiante");
});

registroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("regNombres").value.trim();
    const perfil = regPerfil.options[regPerfil.selectedIndex].text;

    const requiereValidacion = regPerfil.value !== "ciudadano";
    const estadoInicial = requiereValidacion ? "Pendiente de validación documental" : "Activo";

    registroFeedback.textContent = `Registro enviado correctamente para ${nombre} (${perfil}). Estado inicial en sistema: ${estadoInicial}.`;
    registroFeedback.classList.remove("hidden");
    registroForm.reset();
    camposAbogado.classList.add("hidden");
    camposEstudiante.classList.add("hidden");
});

// Simulador de Rol en Barra Superior (RN-12)
roleSimulator.addEventListener("change", () => {
    const rol = roleSimulator.value;
    const mensajes = {
        ciudadano: "Estás navegando como <strong>Ciudadano</strong>. Puedes buscar servicios, publicar encargos y hacer seguimiento.",
        abogado: "Estás navegando como <strong>Abogado Verificado</strong>. Puedes publicar servicios jurídicos, ofertas y postularte a encargos.",
        estudiante: "Estás navegando como <strong>Estudiante Activo</strong>. Habilitado únicamente para encargos y actividades de apoyo permitidas (RN-03)."
    };
    roleDescription.innerHTML = mensajes[rol];
});

// Menú móvil y eventos de filtros
document.getElementById("menuToggle").addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    const expanded = nav.classList.toggle("open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", expanded);
});

[filtroCategoria, filtroCiudad, filtroModalidad].forEach((el) =>
    el.addEventListener("change", renderServicios)
);

btnLimpiarFiltros.addEventListener("click", () => {
    filtroCategoria.value = "todas";
    filtroCiudad.value = "todas";
    filtroModalidad.value = "todas";
    renderServicios();
});

// Inicialización
renderServicios();
renderEncargos();
renderDirectorio();