import Sequelize from 'sequelize';

const Conn = new Sequelize(
  "browsers",
  "root",
  "123456",
  {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false 
    }
  }
);

const Browsers = Conn.define("Browsers", {
  userAgent: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  browser: {
    type: Sequelize.STRING,
    allowNull: false
  },
  version: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mobile: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  os: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Browsers_has_DocumentProperties = Conn.define("Browsers_has_DocumentProperties", {
  Browsers_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  DocumentProperties_id: {
    type: Sequelize.INTEGER,
    allowNull: false 
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false 
  }
});

const Browsers_has_WindowProperties = Conn.define("Browsers_has_WindowProperties", {
  Browsers_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  WindowProperties_id: {
    type: Sequelize.INTEGER,
    allowNull: false 
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false 
  }
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
});

Conn.sync();

export default Conn; 