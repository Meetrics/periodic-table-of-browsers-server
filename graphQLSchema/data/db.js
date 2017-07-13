import Sequelize from 'sequelize';

const Conn = new Sequelize(
  "browsers",
  "root",
  "123456",
  {
    dialect: "mysql",
    host: "localhost"
  }
);

const Browsers = Conn.define("Browsers", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

const Browsers_has_DocumentProperties = Conn.define("Browsers_has_DocumentProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const Browsers_has_WindowProperties = Conn.define("Browsers_has_WindowProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const BrowserVersions = Conn.define("BrowserVersions", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const UserAgents = Conn.define("UserAgents", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const UserAgentToDocumentProperties = Conn.define("UserAgentToDocumentProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const UserAgentToWindowProperties = Conn.define("UserAgentToWindowProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const DocumentProperties = Conn.define("DocumentProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  timestamps: false
});

const WindowProperties = Conn.define("WindowProperties", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Conn.sync();

export default Conn; 